const Player = require("../Models/Player");
const User = require("../Models/user")


async function updatePlayerInfo(req,res){
    try {
        const _id = req.params._id;
        const body = req.body;
        console.log(body);
        if(!body) return res.status(300).json({message : "Bad Request"});
        try {
            const result = await Player.findOneAndUpdate({userInfo : _id},{
                playerJourney : body.playerJourney,
                Level : body.Level,
                TotalGames : body.TotalGames,
                XP : body.XP,
                accuracy : body.accuracy,
            },{new: true});
            if(!result) return res.status(404).json({message : "User not found"});

            return res.status(200).json({message : result});
        } catch (error) {
            console.log(error);
            return res.status(404).json({message : `Something went wrong : ${error}`});
        }
    } catch (error) {
        console.log(error);
        return res.status(502).json({message : `Internal Server Error : ${error}`});
    }
}

async function getUserInfo(req,res) {
    try {
        const _id = req.params._id;
        console.log("The user ID in fetch Api is",_id);
        try {
            const result = await Player.findOne(
                { userInfo : _id,}
            )
        } catch (error) {
            console.log(error);
        }
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
    updatePlayerInfo,
}