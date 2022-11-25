const express = require('express');
const controller = require('./user.controller')
const router = express.Router();

router.post("/signup", controller.create_user);
router.get("/users", controller.get_users);
router.post("/otpVerify", controller.otp_verify);

module.exports = router