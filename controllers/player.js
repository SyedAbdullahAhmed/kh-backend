const mongoose = require('mongoose')
const CricketPlayer = require('../models/player')

// GET PLAYERS DATA
const getPlayersData = async(req,res)=>{
    try {
     //find data
      const result = await CricketPlayer.find()
      res.send(result)
    } catch (error) {
      console.log(error);
      res.status(500).send({message : 'Internal Server Error'});
    }
  }

// GET DATA BY ID
const getPlayersDataByID = async(req,res)=>{
     //id from parameter
     let _id = req.params.id;
    try {
      const result = await CricketPlayer.findOne({_id})
      if(!result){
          return res.status(404).send({message : 'CricketPlayer not found'}); 
      }
      res.send(result)
    } catch (error) {
      console.log(error);
      res.status(500).send({message : 'Internal Server Error'});
    }
}

// GET DATA BY PHONENUMBER
const getPlayersDataByPhoneNumber = async(req,res)=>{
     //id from parameter
     let phoneNumber = req.params.phoneNumber;
     console.log(phoneNumber);
     try {
      const result = await CricketPlayer.findOne({ 'personalInformation.phoneNumber': phoneNumber });
      if(!result){
          return res.status(404).send({message : 'CricketPlayer not found'}); 
      }
      res.send(result)
    } catch (error) {
      console.log(error);
      res.status(500).send({message : 'Internal Server Error'});
    }
}



//POST DATA
const postPlayersData = async(req,res)=>{
       let body = req.body
       console.log(body);
       let doc = new CricketPlayer(body)
       try {
         const result = await doc.save();
         console.log(result);
         res.send({msg:"Save Document Successfully!"})
       } catch (error) {
         console.log(error);
         res.status(500).send({message : 'Internal Server Error'});
       }
   }
   
// UPDATE DATA BY ID
const updatePlayersDataByID = async (req, res) => {
  const _id = req.params.id;
  const body = req.body;

  try {
    const result = await CricketPlayer.findOneAndUpdate({ _id }, { $set: body }, { new: true });

    if (!result) {
      return res.status(404).send({message : 'CricketPlayer not found'});
    }
    res.send({ msg: "Updated Successfully!", updatedPlayer: result });
  } catch (error) {
    console.log(error);
    res.status(500).send({message : 'Internal Server Error'});
  }
};

// DELETE DATA BY ID
const deletePlayersDataByID = async(req,res)=>{
  const _id = req.params.id
    try {
      const result = await CricketPlayer.findOneAndDelete({_id})
      if(!result) {
          return res.status(404).send({message : 'CricketPlayer not found'}); 
      }
      res.send({msg : "Deleted Successfully!"})
    } catch (error) {
      console.log(error);
      res.status(500).send({message : 'Internal Server Error'});
    }
}

module.exports = {getPlayersDataByPhoneNumber,getPlayersData,getPlayersDataByID,postPlayersData,updatePlayersDataByID,deletePlayersDataByID};
