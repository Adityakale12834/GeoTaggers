const express = require("express");

const router = express.Router();
const {getMaps,getLocations} = require("../controller/map-controller");

router.post('/generate', getMaps);
router.get("/location",getLocations);

module.exports = router;