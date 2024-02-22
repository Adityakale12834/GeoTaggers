const mongoose = require("mongoose");

const mapSchema = mongoose.Schema({
    lat : {
        type : String,
        required : true,
    },
    lng :{
        type : String,
        required : true,
    },
    Country : {
        type : String,
        required : true,
    }
});
module.exports = mongoose.model("Maps",mapSchema);