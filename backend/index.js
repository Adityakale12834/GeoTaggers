const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
app.use(cors());
const router = require("./routes/user-routes");
const PORT = 5000;


app.use(cookieParser());
app.use(express.json());
app.use('/api',router);

mongoose.connect("mongodb+srv://vrushalikale9765:q5sMrGHW1A2IlHHq@cluster0.gdyanht.mongodb.net/auth?retryWrites=true&w=majority")
.then(() => {
    app.listen(PORT, () => console.log(`Server & Database Connected at PORT ${PORT}`));
    //vrushalikale9765
    //q5sMrGHW1A2IlHHq
})
.catch((err) => console.log(err));
