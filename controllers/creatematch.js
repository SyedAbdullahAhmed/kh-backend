const mongoose = require('mongoose')
const Match = require('../models/creatematch')

// GET MATCHES DATA
const getMatchesData = async (req, res) => {
     try {
       // Attempt to get data from the cache
       const cacheValue = await client.get('matcheid');
   
       if (cacheValue) {
         // Data is found in the cache
         const result = JSON.parse(cacheValue);
         res.send(result);
       } else {
         // Data is not in the cache, fetch it from the database
         const result = await Match.find();
   
         // Store the data in the cache with a 2-minute expiration
         await client.set('matcheid', JSON.stringify(result), 'EX', 120);
   
         res.send(result);
       }
     } catch (error) {
       console.error(error);
       res.status(500).send({ message: 'Internal Server Error' });
     }
   }
   

// GET MATCHES DATA BY ID
const getMatchesDataByID = async (req, res) => {
     const _id = req.params.id;
     try {
       // Attempt to get data from the cache
       const cacheValue = await client.get(`match:id`);
   
       if (cacheValue) {
         // Data is found in the cache
         const matchData = JSON.parse(cacheValue);
         res.send(matchData);
       } else {
         // Data is not in the cache, fetch it from the database
         const result = await Match.findOne({ _id });
   
         if (!result) {
           return res.status(404).send({ message: 'Match not found' });
         }
   
         // Store the match data in the cache with a 2-minute expiration
         await client.set(`match:id`, JSON.stringify(result), 'EX', 120);
   
         res.send(result);
       }
     } catch (error) {
       console.error(error);
       res.status(500).send({ message: 'Internal Server Error' });
     }
   }
   

// GET MATCHES INFORMATION  DATA BY ID
const getMatchesInformationDataByID = async (req, res) => {
     const _id = req.params.id;
     try {
       // Attempt to get data from the cache
       const cacheValue = await client.get(`match:information`);
   
       if (cacheValue) {
         // Data is found in the cache
         const information = JSON.parse(cacheValue);
         res.send(information);
       } else {
         // Data is not in the cache, fetch it from the database
         const result = await Match.findOne({ _id });
   
         if (!result) {
           return res.status(404).send({ message: 'Match not found' });
         }
   
         const information = result.matchInformation;
   
         // Store the match information in the cache with a 2-minute expiration
         await client.set(`match:information`, JSON.stringify(information), 'EX', 120);
   
         res.send(information);
       }
     } catch (error) {
       console.error(error);
       res.status(500).send({ message: 'Internal Server Error' });
     }
   }
   

// GET MATCHES DATA BY ID
const getMatchesUmpiresDataByID = async (req, res) => {
     const _id = req.params.id;
     try {
       // Attempt to get data from the cache
       const cacheValue = await client.get(`match:umpires`);
   
       if (cacheValue) {
         // Data is found in the cache
         const umpires = JSON.parse(cacheValue);
         res.send(umpires);
       } else {
         // Data is not in the cache, fetch it from the database
         const result = await Match.findOne({ _id });
   
         if (!result) {
           return res.status(404).send({ message: 'Match not found' });
         }
   
         const umpires = result.umpires;
   
         // Store the umpires data in the cache with a 2-minute expiration
         await client.set(`match:umpires`, JSON.stringify(umpires), 'EX', 120);
   
         res.send(umpires);
       }
     } catch (error) {
       console.error(error);
       res.status(500).send({ message: 'Internal Server Error' });
     }
   }
   

// GET MATCHES TEAMS DATA BY ID
const getMatchesTeamsDataByID = async (req, res) => {
     const _id = req.params.id;
     try {
       // Attempt to get data from the cache
       const cacheValue = await client.get(`match:teams`);
   
       if (cacheValue) {
         // Data is found in the cache
         const teams = JSON.parse(cacheValue);
         res.send(teams);
       } else {
         // Data is not in the cache, fetch it from the database
         const result = await Match.findOne({ _id });
   
         if (!result) {
           return res.status(404).send({ message: 'Match not found' });
         }
   
         const teams = result.teams;
   
         // Store the teams data in the cache with a 2-minute expiration
         await client.set(`match:teams`, JSON.stringify(teams), 'EX', 120);
   
         res.send(teams);
       }
     } catch (error) {
       console.error(error);
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

          res.send({ savedDocument: result })
     } catch (error) {
          console.log(error);
          res.status(500).send({ message: 'Internal Server Error' });
     }
}

//POST UMPIRE IN MATCH DATA
const postUmipreFromID = async (req, res) => {
     try {
          //fetch umpire data from parameter
          const data = await fetch(`http://localhost:5000/umpires/${req.params.umpireId}`)
          const umpireData = await data.json()

          // find match
          const _id = req.params.matchId
          const result = await Match.findOne({ _id })

          if (!result) {
               return res.status(404).send({ message: 'Match not found' });
          }

          if (result.umpires.length >= 4) {
               return res.status(404).send({ message: "Match has maximum 3 umpires!" });
          }

          // data that is added
          const id = umpireData._id
          const name = umpireData.personal_information.umpire_name

          // find for duplicate
          const umpireArray = result.umpires
          const foundObject = umpireArray.find((element) => element.id === id);

          if(foundObject){
              return res.status(404).send({message : "Not allowed dulpicate umpires!"}); 
          }
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
const updateMatchesTeamDataByID = async (req, res) => {

     const _id = req.params.matchId;
     const body = req.body;
     const teamID = req.params.teamId
     try{

     // find match
     const result = await Match.findOne({ _id });

     if (!result) {
           return res.status(404).send({ message: 'Match not found' });
     }
     
     // select teams array
     const teamsArray = result.teams
     
     // find team in array
     const findTeam = teamsArray.find((val) => val.teamID === teamID)
     
     // update values
     for (const key in body) {
          if (body.hasOwnProperty(key)) {
            findTeam[key] = body[key];
          }
        }
        // save in database
        await result.save()

        res.send({ msg: "Updated Successfully!", updatedPlayer: result.teams });
     }
     catch(error) {
          console.log(error);
          res.status(500).send({ message: 'Internal Server Error' });
     }
        
     // const result1 = await Match.findOneAndUpdate({ _id }, { $set: findTeam }, { new: true });

     // try {

     //      // empty object
     //      let updatedData = {};

     // //      //push body data in object
     //      for (const field in body) {
     //           updatedData[`matchInformation.${field}`] = body[field];
     //      }

     //      // update data using object
     //      

     //      // empty due to other requests data
     //      updatedData = {}

     //      if (!result) {
     //           return res.status(404).send({ message: 'Match not found' });
     //      }
     //      res.send({ msg: "Updated Successfully!", updatedPlayer: result.matchInformation });
     // } catch (error) {
     //      console.log(error);
     //      res.status(500).send({ message: 'Internal Server Error' });
     // }
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


module.exports = { deleteUmipreByID,updateMatchesInformationDataByID, updateMatchesTeamDataByID, updateMatchesUmpiresDataByID, getMatchesInformationDataByID, getMatchesTeamsDataByID, getMatchesUmpiresDataByID, postMatchData, getMatchesData, getMatchesDataByID, updateMatchesDataByID, deleteMatchesDataByID, postUmipreFromID, postTeamFromID };