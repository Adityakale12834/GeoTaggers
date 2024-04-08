const User = require("../Models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const secretkey = "Adityakale"; 
const blockedOrigin = 'http://localhost:8888';

async function signup(req,res,next){
    const {email,username,password} = req.body;
    let result;
    try {
       result = await User.findOne({email : email}); 
    } catch (error) {
       console.log(error); 
    }
    if(result){
        res.status(400).json({message : "the user already exists, You can Login Instead"});
    }
    const hashedpass = bcrypt.hashSync(password);
    const user = new User({
        email,
        username,
        password : hashedpass,
    });
    try {
        await user.save();
    } catch (error) {
        console.log(error);
    }
    return res.status(201).json({message : user});
}

const login = async (req,res,next) => {
    const {email,password} = req.body;
    let existinguser;
    try {
        existinguser = await User.findOne({email : email});
    } catch (error) {
        console.log(error);
    }
    if(!existinguser){
        return res.status(400).json({message : "User Not Found"});
    }

    const isPasswordCorrect = bcrypt.compare(password,existinguser.password);
    if(!isPasswordCorrect){
        return res.status(400).json({message: "Invalid Password"});
    }
    const token = jwt.sign({_id : existinguser._id}, secretkey,{expiresIn : 3600});
    //this is the sign present first 
    res.cookie(String(existinguser._id), token, {
        path : '/',
        expires : new Date(Date.now() + 1000 * 60 * 60),
        httpOnly : true,
        sameSite : 'lax',
    });
    return res.status(200).json({message : "Successfully LoggedIn", user : existinguser, token : token});
}

const verifyToken = (req,res,next) => {
    const cookies = req.headers.cookie;
    console.log("This is the cookie of verfiy Token",cookies);
    const token1 = cookies.split("=");
    let size = token1.length;
    const prevToken1 = token1[1];
    const Tokendummy = prevToken1.split(";");
    const prevToken = Tokendummy[0];
    console.log("This is the verifyToken token",prevToken);
    if(!prevToken){
        return res.status(404).json({message : "No Token Found"});
    }
    const user = jwt.verify(String(prevToken),secretkey);
    console.log("This is GetUser ID",user);
    req.id = user._id;
    next();

};

const getUser = async (req,res,next) => {
    const userId = req.id;
    console.log(userId);
    let user;
    try {
        user = await User.findById(userId,"-password");
        console.log(user);
    } catch (error) {
        return new error(error);
    }
    if(!user){
        return res.status(404).json({message : "user Not Found"});
    }
    return res.status(200).json({user});
}

const refreshToken = async (req,res,next)=> {
    const cookies = req.headers.cookie;
    console.log("This is the cookie",cookies);
    const token1 = cookies.split("=");
    let size = token1.length;
    const prevToken1 = token1[1];
    const Tokendummy = prevToken1.split(";");
    const prevToken = Tokendummy[0];
    if(!prevToken){
        return res.status(400).json({message: "couldn't find token"});
    }
    console.log("previous token",prevToken);
    jwt.verify(String(prevToken),secretkey,(err,user) => {
        if(err){
            console.log(err);
            return res.status(403).json({message:"Authentication failed"});
        }
        console.log("user id is1233 :",user);
        res.clearCookie(`${user.id}`);
        req.cookies[`${user.id}`] = "";

        const token = jwt.sign({ id: user._id }, secretkey, {
        expiresIn: "30min",
        });
        //this is the second sign i am using
        console.log("Regenerated Token\n", token);

        res.cookie(String(user.id), token, {
        path: "/",
        expires: new Date(Date.now() + 1000 * 60 * 60), // 30 seconds
        httpOnly: true,
        sameSite: "lax",
        });

        req.id = user.id;
        next();
    });
}

const logout = (req, res, next) => {
    const cookies = req.headers.cookie;
    const prevToken1 = cookies.split("=")[1];
    const Tokendummy = prevToken1.split(";");
    const prevToken = Tokendummy[0];
    console.log("This is token in logout",prevToken);
    if (!prevToken) {
      return res.status(400).json({ message: "Couldn't find token" });
    }
    jwt.verify(String(prevToken), secretkey, (err, user) => {
      if (err) {
        console.log(err);
        return res.status(403).json({ message: "Authentication failed" });
      }
      res.clearCookie(`${user.id}`);
      req.cookies[`${user.id}`] = "";
      return res.status(200).json({ message: "Successfully Logged Out" });
    });
  };
  

function blockOrigin(req,res,next){
    res.setHeader('Set-Cookie', 'username-localhost-8889=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/');
  next();
}

module.exports = {
    signup,login,verifyToken,getUser,refreshToken,blockOrigin,logout,
}
