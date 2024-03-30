const Player = require("../Models/Player");
const User = require("../Models/user")

async function getUserInfo(req,res) {
    try {
        const _id = req.body;
        console.log(_id);
        const result = await Player.findOne(
            { userInfo : _id,}
        )
        console.log(result);
        return res.status(200).json( {message : result });
    } catch (error) {
        res.status(503).json({message : "you are asshole"});
    }
}

async function setProfileofUser(req,res){
    try {
        const userName  = req.body;
        console.log(userName)
        if(!userName) {
            return res.status(404).json({message : "pass the userName"});
        }
        const name = await User.findOne({username : userName.username});
        console.log(name);
        if(!name){
            return res.status(404).json({message : "User Not Found"});
        }
        const result = await Player.create({
            userInfo : name,
        })
        return res.status(200).json({message : result});
    } catch (error) {
        console.log(error);
        return res.status(502).json({message : "Internal Server error"})
    }
}

module.exports = {
    getUserInfo,
    setProfileofUser,
}