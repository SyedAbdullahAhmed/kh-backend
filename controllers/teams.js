const mongoose = require('mongoose')
const CricketTeams = require('../models/teams')

// GET TEAMS DATA
const getTeamsData = async(req,res)=>{
    try {
     //find data
      const result = await CricketTeams.find()
      res.send(result)
    } catch (error) {
      console.log(error);
      res.status(500).send({message : 'Internal Server Error'});
    }
  }

// GET TEAM DATA BY ID
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
      res.status(500).send({message : 'Internal Server Error'});
    }
}

// GET TEAM STATISTICS DATA BY ID
const getTeamStatisticsDataByID = async(req,res)=>{
     let _id = req.params.id;
    try {
      const result = await CricketTeams.findOne({_id})
      if(!result){
          return res.status(404).send({message : "Team does not found!"}); 
      }
      const statistics = result.teamStatistics
      res.send(statistics)
      
    } catch (error) {
      console.log(error);
      res.status(500).send({message : 'Internal Server Error'});
    }
}

// GET TEAM INFORMATION DATA BY ID
const getTeamInformationDataByID = async(req,res)=>{
     let _id = req.params.id;
    try {
      const result = await CricketTeams.findOne({_id})
      if(!result){
          return res.status(404).send({message : "Team does not found!"}); 
      }
      const information = result.teamInformation
      res.send(information)

    } catch (error) {
      console.log(error);
      res.status(500).send({message : 'Internal Server Error'});
    }
}

// GET TEAM PLAYERS INFORMATION DATA BY ID
const getTeamPlayersDataByID = async(req,res)=>{
     let _id = req.params.id;
    try {
      const result = await CricketTeams.findOne({_id})
      if(!result){
          return res.status(404).send({message : "Team does not found!"}); 
      }
      const players = result.teamInformation.players
      res.send(players)  

    } catch (error) {
      console.log(error);
      res.status(500).send({message : 'Internal Server Error'});
    }
}

//POST TEAMS
const postTeamsData = async(req,res)=>{
       let body = req.body
       console.log(body);
       let doc = new CricketTeams(body)
       try {
         const result = await doc.save();
         console.log(result);
         res.send({msg:"Save Document Successfully!"})
       } catch (error) {
         console.log(error);
         res.status(500).send({message : 'Internal Server Error'});
       }
   }

// ADD PLAYER IN A TEAM BY ID
const  addPlayerInTeamByID = async(req,res)=>{
     try{
        // find player 
          const playerID = req.params.playerId;
          const data = await fetch(`http://localhost:5000/players/${playerID}`);
          const playerData = await data.json()
          
          const p_id = playerData._id
          const p_name = playerData.personalInformation.fullName
          
          //find team
          const _id = req.params.teamId;
          const result = await CricketTeams.findOne({_id})
          
          if(!result) {
              return res.status(404).send({message : "Team does not found!"}); 
          }

          if(result.teamInformation.players.length >12) {
               return res.status(404).send({message : "Team has maximum 11 players!"}); 
          }

          //push data in team
          result.teamInformation.players.push({p_id,p_name})
          await result.save();
          res.send({updated : result.teamInformation.players});
          

     }
     catch(e) {
          console.log(e);
     }
   }

// REMOVE PLAYER IN A TEAM BY ID
const removePlayerInTeamByID = async(req,res)=>{
     try{
        // find player 
          const playerID = req.params.playerId;
   
          //find team
          const _id = req.params.teamId;
          const result = await CricketTeams.findOne({_id})
          
          if(!result) {
              return res.status(404).send({message : "Team does not found!"}); 
          }

          //remove data in team
          const players = result.teamInformation.players

          // filter data from array
          const filteredPlayers = players.filter((item) => item.p_id !== playerID);
          result.teamInformation.players = filteredPlayers
 
          // save in database
          await result.save();
          res.send({result});

     }
     catch(e) {
          console.log(e);
     }
   }
   
// UPDATE TEAMS BY ID
const updateTeamsDataByID = async (req, res) => {
  const _id = req.params.id;
  const body = req.body;

  try {
    const result = await CricketTeams.findOneAndUpdate({ _id }, { $set: body }, { new: true });

    if (!result) {
      return res.status(404).send({message : "Team does not found!"});
    }
    res.send({ msg: "Updated Successfully!", updatedTeam: result });
  } catch (error) {
    console.log(error);
    res.status(500).send({message : 'Internal Server Error'});
  }
};

// DELETE TEAM BY ID
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
      res.status(500).send({message : 'Internal Server Error'});
    }
}

// UPDATE TEAM STATISTICS DATA BY ID
const updateTeamStatisticsDataByID = async(req,res)=>{
  const _id = req.params.id;
  const body = req.body;

  try {

    // empty object
    let updatedData = {};

    //push body data in object
    for (const field in body) {
      updatedData[`teamStatistics.${field}`] = body[field];
    }

    // update data using object
    const result = await CricketTeams.findOneAndUpdate({ _id }, {$set: updatedData}, { new: true });

    // empty due to other requests data
    updatedData = {}

    if (!result) {
      return res.status(404).send({message : 'CricketTeams not found'});
    }
    res.send({ msg: "Updated Successfully!", updatedPlayer: result.teamStatistics });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
}

// UPDATE TEAM INFORMATION DATA BY ID
const updateTeamInformationDataByID = async(req,res)=>{
  const _id = req.params.id;
  const body = req.body;

  try {

    // empty object
    let updatedData = {};

    //push body data in object
    for (const field in body) {
      updatedData[`teamInformation.${field}`] = body[field];
    }

    // update data using object
    const result = await CricketTeams.findOneAndUpdate({ _id }, {$set: updatedData}, { new: true });

    // empty due to other requests data
    updatedData = {}

    if (!result) {
      return res.status(404).send({message : 'CricketTeams not found'});
    }
    res.send({ msg: "Updated Successfully!", updatedPlayer: result.teamInformation });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
}



module.exports = {removePlayerInTeamByID,getTeamPlayersDataByID,getTeamInformationDataByID,getTeamStatisticsDataByID,addPlayerInTeamByID,getTeamsData,getTeamsDataByID,postTeamsData,updateTeamsDataByID,deleteTeamsDataByID,updateTeamStatisticsDataByID,updateTeamInformationDataByID};
