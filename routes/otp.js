const express = require('express');
const {sendData,getOtp} = require('../controllers/otp')
const router = express.Router();

// post data
router.post('/players/otp/:phoneNumber',sendData)
router.post('/players/:otp',getOtp)

module.exports = router;

