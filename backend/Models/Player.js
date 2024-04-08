const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
    userInfo : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true,
    },
    playerJourney : {
        type : String,
        required : true,
        default : "Newbie",
    },
    Level : {
        type : Number,
        required : true,
        default : 0,
    },
    profilePic : {
        type : String,
        required : true,
        default : 'https://unsplash.com/silhouette-photography-of-man-standing-near-trees-OBufvGMaBaQ'
    },
    TotalGames : {
        type : Number,
        default : 0,
        required : true,
    },
    XP : {
        type : Number,
        default : 0,
        required : true,
    },
    accuracy : {
        type : Number,
        default : 0,
        required : true,
    },
    XPcapacity : {
        type : Number,
        default : 2000,
        required : true,
    }
})

const profileModel = mongoose.model("Profile",playerSchema);

module.exports = profileModel;