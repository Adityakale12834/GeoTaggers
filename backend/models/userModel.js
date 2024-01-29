const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        name : {
            type : String,
            required : true,
        },
        email : {
            type : String,
            required : true,
            unique : true,
        },
        password : {
            type : String,
            required : true,
        },
        statistics : {
            playedGames : {
                type : Number,
            },
            average : {
                type : Number
            },
            totalXp : {
                type : Number,
            },
            level : {
                type : Number,
            }
        },
    },
    {timestamps : true},
);

const userInfo = mongoose.model("userInfo", userSchema);