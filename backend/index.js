const express = require("express");
const { connectToMongoDB } = require("./connect");
const app = express();
const PORT = 8080;

const maps = require("./routes/mapRoute");

connectToMongoDB(process.env.MONGODB ?? "mongodb://127.0.0.1:27017/geotaggers")
.then(() => console.log("Database connected"))
.catch(() => console.log("Database connection failed"));

app.use('/maps', maps);

app.listen(PORT, () => console.log(`Server started at Port : ${PORT}`));