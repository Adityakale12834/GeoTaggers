const User = require("../Models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const secretkey = "Adityakale"; 


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
    const token = jwt.sign({_id : existinguser._id}, secretkey,{expiresIn : "35min"});
    res.cookie(String(existinguser._id), token, {
        path : '/',
        expires : new Date(Date.now() + 1000 * 1800),
        httpOnly : true,
        sameSite : 'lax',
    });
    return res.status(200).json({message : "Successfully LoggedIn", user : existinguser, token : token});
}



const verifyToken = (req,res,next) => {
    const cookies = req.headers.cookie;
    console.log(cookies);
    const token1 = cookies.split("=");
    let size = token1.length;
    const token = token1[size-1];
    console.log("This is the token",token);
    if(!token){
        return res.status(404).json({message : "No Token Found"});
    }
    jwt.verify(String(token),secretkey, (err,user) => {
        if(err){
            return res.status(400).json({message : "Invalid Token"});
        }
        console.log("This is user id",user._id);
        req.id = user._id;
        next();
    });
};

const getUser = async (req,res,next) => {
    const userId = req.id;
    let user;
    try {
        user = await User.findById(userId,"-password");
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
    console.log(cookies);
    const token1 = cookies.split("=");
    let size = token1.length;
    const prevToken = token1[size-1];
    if(!prevToken){
        return res.status(400).json({message: "couldn't find token"});
    }
    jwt.verify(String(prevToken),secretkey,(err,user) => {
        if(err){
            console.log(err);
            return res.status(403).json({message:"Authentication failed"});
        }
        res.clearCookie(`${user.id}`);
        req.cookies[`${user.id}`] = "";

        const token = jwt.sign({ id: user.id }, secretkey, {
        expiresIn: "30min",
        });
        console.log("Regenerated Token\n", token);

        res.cookie(String(user.id), token, {
        path: "/",
        expires: new Date(Date.now() + 1000 * 1700), // 30 seconds
        httpOnly: true,
        sameSite: "lax",
        });

        req.id = user.id;
        next();
    });
}

module.exports = {
    signup,login,verifyToken,getUser,refreshToken
}
