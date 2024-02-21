const Maps = require("../Models/Maps");

async function getMaps(req,res,next){
    const body = req.body;
    console.log(body);
    try {
        const response = await Maps.create({
            lat : body.lat,
            lng : body.lng,
            Country : body.Country,
        });
        console.log(response);
        res.status(200).json({value : response}); 
    } catch (error) {
        return res.status(500).json({message : "Internal Server Error"});
    }   
}

async function getLocations(req,res,next){
    try {
        const response = await Maps.aggregate([{$sample: { size: 1 }}]);
        console.log(response);
        return res.status(200).json({value : response});
    } catch (error) {
        return res.status(500).json({Message : "Internal Server Error"});
    }
}


module.exports = {
    getMaps,getLocations
}