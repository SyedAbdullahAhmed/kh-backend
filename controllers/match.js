const mongoose = require('mongoose')
const Match = require('../models/match')

// GET MATCHES DATA
const getMatchData = async(req,res)=>{
    try {
     //find data
      const result = await Match.find()
      res.send(result)
    } catch (error) {
      console.log(error);
      res.status(500).send({message : 'Internal Server Error'});
    }
  }

// GET DATA BY ID
const getMatchDataByID = async(req,res)=>{
     //id from parameter
     let _id = req.params.id;
    try {
      const result = await Match.findOne({_id})
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
const postMatch = async(req,res)=>{
       let body = req.body
       console.log(body);
       let doc = new Match(body)
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
// const updatePlayersDataByID = async (req, res) => {
//   const _id = req.params.id;
//   const body = req.body;

//   try {
//     const result = await CricketPlayer.findOneAndUpdate({ _id }, { $set: body }, { new: true });

//     if (!result) {
//       return res.status(404).send({message : 'CricketPlayer not found'});
//     }
//     res.send({ msg: "Updated Successfully!", updatedPlayer: result });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({message : 'Internal Server Error'});
//   }
// };

// DELETE DATA BY ID
// const deletePlayersDataByID = async(req,res)=>{
//   const _id = req.params.id
//     try {
//       const result = await CricketPlayer.findOneAndDelete({_id})
//       if(!result) {
//           return res.status(404).send({message : 'CricketPlayer not found'}); 
//       }
//       res.send({msg : "Deleted Successfully!"})
//     } catch (error) {
//       console.log(error);
//       res.status(500).send({message : 'Internal Server Error'});
//     }
// }

module.exports = {getMatchData,getMatchDataByID,postMatch};
