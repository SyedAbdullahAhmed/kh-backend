const mongoose = require('mongoose')
const CricketTeams = require('../models/teams')
const CricketPlayers = require('../models/player')

// GET PLAYERS DATA
const getTeamsData = async(req,res)=>{
    try {
     //find data
      const result = await CricketTeams.find()
      res.send(result)
    } catch (error) {
      console.log(error);
      res.status(500).send('Internal Server Error');
    }
  }

// GET DATA BY ID
const getTeamsDataByID = async(req,res)=>{
     let _id = req.params.id;
    try {
      const result = await CricketTeams.findOne({_id})
      if(!result){
          return res.status(404).send({message : "Team does not found!"}); 
      }
      res.send(result)
    } catch (error) {
      console.log(error);
      res.status(500).send('Internal Server Error');
    }
}



//POST DATA
const postTeamsData = async(req,res)=>{
     
     // CricketPlayers.estimatedDocumentCount({}).exec().then(count => {
     //      if(count >= 12){
     //           return res.send({message : "No more place"})
     //      }
     //      else{
     //           return res.send({message : "place"})
     //      }
     //    });
        
       let body = req.body
       console.log(body);
       let doc = new CricketTeams(body)
       try {
         const result = await doc.save();
         console.log(result);
         res.send({msg:"Save Document Successfully!"})
       } catch (error) {
         console.log(error);
         res.status(500).send('Internal Server Error');
       }
   }
//POST DATA
const addPlayerInTeamByID = async(req,res)=>{
     try{
          const playerID = req.body.id;
          const data = await fetch(`http://localhost:5000/players/${playerID}`);
          const playerData = await data.json()
          
          let _id = req.params.id;
          const result = await CricketTeams.findOne({_id})
          
          if(!result) {
              return res.status(404).send({message : "Team does not found!"}); 
          }

          if(result.teamInformation.players.length >12) {
               return res.status(404).send({message : "Team has maximum 11 players!"}); 
          }

          result.teamInformation.players.push({playerData})
          await result.save();
          res.send({result});

     }
     catch(e) {
          console.log(e);
     }
   }
   
// UPDATE DATA BY ID
const updateTeamsDataByID = async (req, res) => {
  const _id = req.params.id;
  const body = req.body;

  try {
    const result = await CricketTeams.findOneAndUpdate({ _id }, { $set: body }, { new: true });

    if (!result) {
      return res.status(404).send({message : "Team does not found!"});
    }
    res.send({ msg: "Updated Successfully!", updatedPlayer: result });
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
};

// DELETE DATA BY ID
const deleteTeamsDataByID = async(req,res)=>{
  const _id = req.params.id
    try {
      const result = await CricketTeams.findOneAndDelete({_id})
      if(!result) {
          return res.status(404).send({message : "Team does not found!"}); 
      }
      res.send({msg : "Deleted Successfully!"})
    } catch (error) {
      console.log(error);
      res.status(500).send('Internal Server Error');
    }
}

module.exports = {addPlayerInTeamByID,getTeamsData,getTeamsDataByID,postTeamsData,updateTeamsDataByID,deleteTeamsDataByID};
