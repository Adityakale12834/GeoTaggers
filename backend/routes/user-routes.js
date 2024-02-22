const express = require("express");

const router = express.Router();
const {signup, login, verifyToken, getUser} = require("../controller/user-controller");


router.post('/signup', signup);
router.post("/login",login);
router.get("/user",verifyToken,getUser);
module.exports = router;
