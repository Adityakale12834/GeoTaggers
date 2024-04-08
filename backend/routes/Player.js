const express = require("express");
const router = express.Router();
const {getUserInfo,setProfileofUser,updatePlayerInfo} = require("../controller/Player-controller");

router.get("/:_id", getUserInfo);
router.post("/set",setProfileofUser);
router.patch("/update/:_id",updatePlayerInfo);
module.exports = router;