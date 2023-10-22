const mongoose = require('mongoose')
const CricketTeams = require('../models/teams')
const CricketPlayers = require('../models/player')

// GET PLAYERS DATA
const getTeamsData = async(req,res)=>{
//     try {
//      //find data
//       const result = await CricketTeams.find()
//       res.send(result)
//     } catch (error) {
//       console.log(error);
//       res.status(500).send('Internal Server Error');
//     }
  }

// GET DATA BY ID
const getTeamsDataByID = async(req,res)=>{
//      //id from parameter
//      let _id = req.params.id;
//     try {
//       const result = await CricketTeams.findOne({_id})
//       if(!result){
//           return res.status(404).send('CricketTeams not found'); 
//       }
//       res.send(result)
//     } catch (error) {
//       console.log(error);
//       res.status(500).send('Internal Server Error');
//     }
}



//POST DATA
const postTeamsData = async(req,res)=>{
     CricketPlayers.estimatedDocumentCount({}).exec().then(count => {
          if(count >= 8){
               return res.send({message : "No more place"})
          }
          else{
               return res.send({message : "place"})
          }
        });
        
     //   let body = req.body
     //   console.log(body);
     //   let doc = new CricketTeams(body)
     //   try {
     //     const result = await doc.save();
     //     console.log(result);
     //     res.send({msg:"Save Document Successfully!"})
     //   } catch (error) {
     //     console.log(error);
     //     res.status(500).send('Internal Server Error');
     //   }
   }
   
// UPDATE DATA BY ID
const updateTeamsDataByID = async (req, res) => {
//   const _id = req.params.id;
//   const body = req.body;

//   try {
//     const result = await CricketTeams.findOneAndUpdate({ _id }, { $set: body }, { new: true });

//     if (!result) {
//       return res.status(404).send('CricketTeams not found');
//     }
//     res.send({ msg: "Updated Successfully!", updatedPlayer: result });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send('Internal Server Error');
//   }
};

// DELETE DATA BY ID
const deleteTeamsDataByID = async(req,res)=>{
//   const _id = req.params.id
//     try {
//       const result = await CricketTeams.findOneAndDelete({_id})
//       if(!result) {
//           return res.status(404).send('CricketTeams not found'); 
//       }
//       res.send({msg : "Deleted Successfully!"})
//     } catch (error) {
//       console.log(error);
//       res.status(500).send('Internal Server Error');
//     }
}

module.exports = {getTeamsData,getTeamsDataByID,postTeamsData,updateTeamsDataByID,deleteTeamsDataByID};
