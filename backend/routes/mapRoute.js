const express = require("express");
const {getMaps} = require("../controller/Map");

const router = express.Router();

router.get("/", getMaps);


module.exports = router;