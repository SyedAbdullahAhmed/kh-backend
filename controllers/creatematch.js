const mongoose = require('mongoose')
const Match = require('../models/creatematch')

// GET MATCHES DATA
const getMatchesData = async (req, res) => {
     try {
          //find data
          const result = await Match.find()
          res.send(result)
     } catch (error) {
          console.log(error);
          res.status(500).send({ message: 'Internal Server Error' });
     }
}

// GET MATCHES DATA BY ID
const getMatchesDataByID = async (req, res) => {
     //id from parameter
     const _id = req.params.id;
     try {
          const result = await Match.findOne({ _id })
          if (!result) {
               return res.status(404).send({ message: 'Team not found' });
          }
          res.send(result)
     } catch (error) {
          console.log(error);
          res.status(500).send({ message: 'Internal Server Error' });
     }
}


//POST MATCH DATA
const postMatchData = async (req, res) => {
     let body = req.body
     console.log(body);
     let doc = new Match(body)
     try {
          const result = await doc.save();
          console.log(result);
          res.send({ msg: "Save Document Successfully!" })
     } catch (error) {
          console.log(error);
          res.status(500).send({ message: 'Internal Server Error' });
     }
}

//POST UMPIRE IN MATCH DATA
const postUmipreFromID = async (req, res) => {
     try {
          const data = await fetch(`http://localhost:5000/umpires/${req.params.umpireId}`)
          const umpireData = await data.json()//6537e22bc3778eb32bb67c4c
          //653d61de948bf5ad511424cf
          const _id = req.params.matchId 
          const result = await Match.findOne({ _id})
          if (!result) {
               return res.status(404).send({ message: 'Match not found' });
          }

          if (result.umpires.length >= 4) {
               return res.status(404).send({ message: "Match has maximum 3 umpires!" });
          }
          const umpire_id = umpireData._id 
          result.umpires.push( umpire_id )
          await result.save();
          res.send({ result });

     } catch (error) {
          console.log(error);
          res.status(500).send({ message: 'Internal Server Error' });
     }
}

//POST TEAM IN MATCH DATA
const postTeamFromID = async (req, res) => {
     try {
          const data = await fetch(`http://localhost:5000/teams/${req.params.teamId}`)
          const teamData = await data.json()
          
          const _id = req.params.matchId 
          const result = await Match.findOne({ _id})
          if (!result) {
               return res.status(404).send({ message: 'Match not found' });
          }

          if (result.teams.length >= 2) {
               return res.status(404).send({ message: "Match has maximum 2 teams!" });
          }

          result.teams.push( {
               teamID : teamData._id,
               teamName : teamData.teamInformation.name
          })
          await result.save();
          res.send({ result });

     } catch (error) {
          console.log(error);
          res.status(500).send({ message: 'Internal Server Error' });
     }
}

// UPDATE MATCH DATA BY ID
const updateMatchesDataByID = async (req, res) => {
     const _id = req.params.id;
     const body = req.body;

     try {
          const result = await Match.findOneAndUpdate({ _id }, { $set: body }, { new: true });

          if (!result) {
               return res.status(404).send({ message: 'Match not found' });
          }
          res.send({ msg: "Updated Successfully!", updatedMatch: result });
     } catch (error) {
          console.log(error);
          res.status(500).send({ message: 'Internal Server Error' });
     }
};

// DELETE MATCH DATA BY ID
const deleteMatchesDataByID = async (req, res) => {
     const _id = req.params.id
     try {
          const result = await Match.findOneAndDelete({ _id })
          if (!result) {
               return res.status(404).send({ message: 'Match not found' });
          }
          res.send({ msg: "Deleted Successfully!" })
     } catch (error) {
          console.log(error);
          res.status(500).send({ message: 'Internal Server Error' });
     }
}

module.exports = { postMatchData, getMatchesData, getMatchesDataByID, updateMatchesDataByID, deleteMatchesDataByID, postUmipreFromID, postTeamFromID };