const userMap = require("../models/mapModel");

async function getMaps(req,res){
    console.log("This function is reached");
    try {
        const map = await userMap.model.findOne().sample(1);
        console.log(map);
        if (!map) {
            return res.status(404).json({ message: "No maps found" });
        }

        const { latitude, longitude } = map;
        return res.json({
            latitude: latitude,
            longitude: longitude,
            message: "Query Successful",
        });
    } catch (error) {
        console.error("Error fetching map:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = {
    getMaps,
}