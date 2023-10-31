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
               return res.status(404).send({ message: 'Match not found' });
          }
          res.send(result)
     } catch (error) {
          console.log(error);
          res.status(500).send({ message: 'Internal Server Error' });
     }
}

// GET MATCHES INFORMATION  DATA BY ID
const getMatchesInformationDataByID = async (req, res) => {
     //id from parameter
     const _id = req.params.id;
     try {
          const result = await Match.findOne({ _id })
          if (!result) {
               return res.status(404).send({ message: 'Match not found' });
          }
          res.send(result.matchInformation)
     } catch (error) {
          console.log(error);
          res.status(500).send({ message: 'Internal Server Error' });
     }
}

// GET MATCHES DATA BY ID
const getMatchesUmpiresDataByID = async (req, res) => {
     //id from parameter
     const _id = req.params.id;
     try {
          const result = await Match.findOne({ _id })
          if (!result) {
               return res.status(404).send({ message: 'Match not found' });
          }
          res.send(result.umpires)
     } catch (error) {
          console.log(error);
          res.status(500).send({ message: 'Internal Server Error' });
     }
}

// GET MATCHES TEAMS DATA BY ID
const getMatchesTeamsDataByID = async (req, res) => {
     //id from parameter
     const _id = req.params.id;
     try {
          const result = await Match.findOne({ _id })
          if (!result) {
               return res.status(404).send({ message: 'Match not found' });
          }
          res.send(result.teams)
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
          res.send({ msg: "Save Document Successfully!", document: result })
     } catch (error) {
          console.log(error);
          res.status(500).send({ message: 'Internal Server Error' });
     }
}

//POST UMPIRE IN MATCH DATA
const postUmipreFromID = async (req, res) => {
     try {
          const data = await fetch(`http://localhost:5000/umpires/${req.params.umpireId}`)
          const umpireData = await data.json()

          const _id = req.params.matchId
          const result = await Match.findOne({ _id })
          if (!result) {
               return res.status(404).send({ message: 'Match not found' });
          }

          if (result.umpires.length >= 4) {
               return res.status(404).send({ message: "Match has maximum 3 umpires!" });
          }
          const id = umpireData._id
          const name = umpireData.personal_information.umpire_name
          result.umpires.push({id,name})
          await result.save();
          res.send({ result : result.umpires });

     } catch (error) {
          console.log(error);
          res.status(500).send({ message: 'Internal Server Error' });
     }
}

//DELETE UMPIRE IN MATCH DATA
const deleteUmipreByID = async (req, res) => {
     try {
         // find umpire
         const umpireID = req.params.umpireId;
   
         //find team
         const _id = req.params.matchId;
         const result = await Match.findOne({_id})
         
         if(!result) {
             return res.status(404).send({message : "Team does not found!"}); 
         }

         //remove data in team
         const umpires = result.umpires

         // filter data from array
         const filteredUmpires = umpires.filter((item) => item.id !== umpireID);
         result.umpires = filteredUmpires

         // save in database
         await result.save();
         res.send({result : result.umpires});

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
          const result = await Match.findOne({ _id })
          if (!result) {
               return res.status(404).send({ message: 'Match not found' });
          }

          if (result.teams.length >= 2) {
               return res.status(404).send({ message: "Match has maximum 2 teams!" });
          }

          result.teams.push({
               teamID: teamData._id,
               teamName: teamData.teamInformation.name
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

// UPDATE MATCHES INFORMATION DATA BY ID
const updateMatchesInformationDataByID = async (req, res) => {
     const _id = req.params.id;
     const body = req.body;

     try {

          // empty object
          let updatedData = {};

          //push body data in object
          for (const field in body) {
               updatedData[`matchInformation.${field}`] = body[field];
          }

          // update data using object
          const result = await Match.findOneAndUpdate({ _id }, { $set: updatedData }, { new: true });

          // empty due to other requests data
          updatedData = {}

          if (!result) {
               return res.status(404).send({ message: 'Match not found' });
          }
          res.send({ msg: "Updated Successfully!", updatedPlayer: result.matchInformation });
     } catch (error) {
          console.log(error);
          res.status(500).send({ message: 'Internal Server Error' });
     }
};

// UPDATE MATCHES TEAMS DATA BY ID
const updateMatchesTeam1DataByID = async (req, res) => {
     const _id = req.params.id;
     const body = req.body;

     try {

          // empty object
          let updatedData = {};

          //push body data in object
          for (const field in body) {
               updatedData[`teams.team1.${field}`] = body[field];
          }

          // update data using object
          const result = await Match.findOneAndUpdate({ _id }, { $set: updatedData }, { new: true });

          // empty due to other requests data
          updatedData = {}

          if (!result) {
               return res.status(404).send({ message: 'Match not found' });
          }
          res.send({ msg: "Updated Successfully!", updatedPlayer: result.teams.team1 });
     } catch (error) {
          console.log(error);
          res.status(500).send({ message: 'Internal Server Error' });
     }
};

// UPDATE MATCHES TEAMS DATA BY ID
const updateMatchesTeam2DataByID = async (req, res) => {
     const _id = req.params.id;
     const body = req.body;

     try {

          // empty object
          let updatedData = {};

          //push body data in object
          for (const field in body) {
               updatedData[`teams.team2.${field}`] = body[field];
          }

          // update data using object
          const result = await Match.findOneAndUpdate({ _id }, { $set: updatedData }, { new: true });

          // empty due to other requests data
          updatedData = {}

          if (!result) {
               return res.status(404).send({ message: 'Match not found' });
          }
          res.send({ msg: "Updated Successfully!", updatedPlayer: result.teams.team2 });
     } catch (error) {
          console.log(error);
          res.status(500).send({ message: 'Internal Server Error' });
     }
};

// UPDATE MATCHES UMPIRES DATA BY ID
const updateMatchesUmpiresDataByID = async (req, res) => {
     const _id = req.params.id;
     const body = req.body;

     try {

          // empty object
          let updatedData = {};

          //push body data in object
          for (const field in body) {
               updatedData[`statistics.fielding.${field}`] = body[field];
          }

          // update data using object
          const result = await CricketPlayer.findOneAndUpdate({ _id }, { $set: updatedData }, { new: true });

          // empty due to other requests data
          updatedData = {}

          if (!result) {
               return res.status(404).send({ message: 'CricketPlayer not found' });
          }
          res.send({ msg: "Updated Successfully!", updatedPlayer: result.statistics.fielding });
     } catch (error) {
          console.log(error);
          res.status(500).send({ message: 'Internal Server Error' });
     }
};


module.exports = { deleteUmipreByID,updateMatchesInformationDataByID, updateMatchesTeam1DataByID, updateMatchesUmpiresDataByID, getMatchesInformationDataByID, getMatchesTeamsDataByID, getMatchesUmpiresDataByID, postMatchData, getMatchesData, getMatchesDataByID, updateMatchesDataByID, deleteMatchesDataByID, postUmipreFromID, postTeamFromID,updateMatchesTeam2DataByID };