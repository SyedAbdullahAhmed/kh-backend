const mongoose = require('mongoose')
const CricketPlayer = require('../models/player')
const {sendOtp} = require('../modules/otp')

let generatedOTP
//POST DATA
const sendData = async(req,res)=>{
     const phoneNumber = req.params.phoneNumber;
     console.log(phoneNumber)

    try {
    //  const result = await CricketPlayer.findOne({ 'personalInformation.phoneNumber': phoneNumber });
      console.log(result);
      // if(!result){
      //     return res.status(404).send('User not found'); 
      // }
      // res.send(result)
      // // send otp
      // generatedOTP = sendOtp(phoneNumber)
    } catch (error) {
      console.log(error);
      res.status(500).send('Internal Server Error');
    }
   }


const getOtp = async(req,res)=>{
     const otp = req.params.otp;

     if (generatedOTP === undefined) {
      res.status(500).send('Generated OTP not available');
      return;
    }
  
    if (otp === generatedOTP) {
      res.status(200).send('OTP verified');
    } else {
      res.status(401).send('Invalid OTP');
    }
   }

module.exports = { sendData,getOtp }