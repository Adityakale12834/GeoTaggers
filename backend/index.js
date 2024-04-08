const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
const router = require("./routes/user-routes");
const maps = require("./routes/maps-routes");
const player = require("./routes/Player")
const PORT = 5000;
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(cookieParser());
app.use(express.json());
app.use('/api',router);
app.use('/maps',maps);
app.use("/player",player);
mongoose.connect("mongodb://localhost:27017/geotagger")
.then(() => {
    app.listen(PORT, () => console.log(`Server & Database Connected at PORT ${PORT}`));
    //vrushalikale9765
    //q5sMrGHW1A2IlHHq
})
.catch((err) => console.log(err));
