const express = require("express");

const router = express.Router();
const {signup, login, verifyToken, getUser, refreshToken} = require("../controller/user-controller");

router.post('/signup', signup);
router.post("/login",login);
router.get("/user",verifyToken,getUser);
router.get("/refresh",refreshToken,verifyToken,getUser);

module.exports = router;
