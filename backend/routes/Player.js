const express = require("express");
const router = express.Router();
const {getUserInfo,setProfileofUser} = require("../controller/Player-controller");

router.get("/", getUserInfo);
router.post("/set",setProfileofUser);

module.exports = router;