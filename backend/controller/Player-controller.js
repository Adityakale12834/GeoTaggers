const Player = require("../Models/Player");
const User = require("../Models/user")

async function getUserInfo(req,res) {
    try {
        const userName = req.body;
        console.log(userName);
        const result = await Player.findOne({userName})
        console.log(result);
        return res.status(200).json( {message : result });
    } catch (error) {
        res.status(503).json({message : error});
    }
}


async function setProfileofUser(req,res){
    try {
        const userName = req.body;
        if(!userName) {
            return res.status(404).json({message : "pass the userName"});
        }
        const name = await User.findOne({username : userName});
        console.log(name);
        if(!name){
            return res.status(404).json({message : "User Not Found"});
        }
        const result = await Player.create({
            username : userName,
        }).populate("userInfo");
        return res.status(200).json({message : result});
    } catch (error) {
        console.log(error);
        return res.status(503).json({message : "Internal Server error"})
    }
}

module.exports = {
    getUserInfo,
    setProfileofUser,
}