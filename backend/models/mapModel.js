const mongoose = require("mongoose");

const mapSchema = new mongoose.Schema(
    {
        
        country : {
            type : String,
            required : true,
        },
        continent : {
            type : String,
            required : true,
        },
        latitude : {
            type : String,
            unique : true,
            required : true,
        },
        longitude : {
            type : String,
            unique : true,
            required : true,
        },
    },
    { timestamps: true }
);

const userMap = mongoose.model("Map", mapSchema);