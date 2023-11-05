const mongoose = require('mongoose')
const CricketPlayer = require('../models/player')
const fetch = require('node-fetch');
const client = require('../redis/client');

// GET PLAYERS DATA
const getPlayersData = async (req, res) => {
  try {
    // Attempt to get data from the cache
    const cacheValue = await client.get('player:data');

    if (cacheValue) {
      // Data is found in the cache
      const result = JSON.parse(cacheValue);
      res.send(result);
    } else {
      // Data is not in the cache, fetch it from the database
      const result = await CricketPlayer.find();

      // Store the data in the cache with a 2-minute expiration
      await client.set('player:data', JSON.stringify(result), 'EX', 120);

      res.send(result);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
}

// GET PERSONAL INFORMATION DATA BY ID
const getPlayersPersonalInformationDataByID = async (req, res) => {
  let _id = req.params.id;
  try {
    // Attempt to get data from the cache
    const cacheValue = await client.get(`player:personalInformation`);

    if (cacheValue) {
      // Data is found in the cache
      const personalInformation = JSON.parse(cacheValue);
      res.send(personalInformation);
    } else {
      // Data is not in the cache, fetch it from the database
      const result = await CricketPlayer.findOne({ _id });

      if (!result) {
        return res.status(404).send({ message: 'CricketPlayer not found' });
      }

      const personalInformation = result.personalInformation;

      // Store the personal information in the cache with a 2-minute expiration
      await client.set(`player:personalInformation`, JSON.stringify(personalInformation), 'EX', 120);

      res.send(personalInformation);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
}

// GET CRICKETDETAILS DATA BY ID
const getPlayersCricketDetailsDataByID = async (req, res) => {
  let _id = req.params.id;
  try {
    // Attempt to get data from the cache
    const cacheValue = await client.get(`player:cricketDetails`);

    if (cacheValue) {
      // Data is found in the cache
      const cricketDetails = JSON.parse(cacheValue);
      res.send(cricketDetails);
    } else {
      // Data is not in the cache, fetch it from the database
      const result = await CricketPlayer.findOne({ _id });

      if (!result) {
        return res.status(404).send({ message: 'CricketPlayer not found' });
      }

      const cricketDetails = result.cricketDetails;

      // Store the cricket details in the cache with a 2-minute expiration
      await client.set(`player:cricketDetails`, JSON.stringify(cricketDetails), 'EX', 120);

      res.send(cricketDetails);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
}

// GET STATISTICS DATA BY ID
const getPlayersStatisticsDataByID = async (req, res) => {
  let _id = req.params.id;
  try {
    // Attempt to get data from the cache
    const cacheValue = await client.get(`playe:statistics`);

    if (cacheValue) {
      // Data is found in the cache
      const statistics = JSON.parse(cacheValue);
      res.send(statistics);
    } else {
      // Data is not in the cache, fetch it from the database
      const result = await CricketPlayer.findOne({ _id });

      if (!result) {
        return res.status(404).send({ message: 'CricketPlayer not found' });
      }

      const statistics = result.statistics;

      // Store the statistics in the cache with a 2-minute expiration
      await client.set(`player:statistics`, JSON.stringify(statistics), 'EX', 120);

      res.send(statistics);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
}

// GET BOWLING DATA BY ID
const getPlayersBowlingDataByID = async (req, res) => {
  let _id = req.params.id;
  try {
    // Attempt to get data from the cache
    const cacheValue = await client.get(`player:bowling`);

    if (cacheValue) {
      // Data is found in the cache
      const bowling = JSON.parse(cacheValue);
      res.send(bowling);
    } else {
      // Data is not in the cache, fetch it from the database
      const result = await CricketPlayer.findOne({ _id });

      if (!result) {
        return res.status(404).send({ message: 'CricketPlayer not found' });
      }

      const bowling = result.statistics.bowling;

      // Store the bowling data in the cache with a 2-minute expiration
      await client.set(`player:bowling`, JSON.stringify(bowling), 'EX', 120);

      res.send(bowling);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
}

// GET BATTING DATA BY ID
const getPlayersBattingDataByID = async (req, res) => {
  let _id = req.params.id;
  try {
    // Attempt to get data from the cache
    const cacheValue = await client.get(`player:batting`);

    if (cacheValue) {
      // Data is found in the cache
      const batting = JSON.parse(cacheValue);
      res.send(batting);
    } else {
      // Data is not in the cache, fetch it from the database
      const result = await CricketPlayer.findOne({ _id });

      if (!result) {
        return res.status(404).send({ message: 'CricketPlayer not found' });
      }

      const batting = result.statistics.batting;

      // Store the batting data in the cache with a 2-minute expiration
      await client.set(`player:batting`, JSON.stringify(batting), 'EX', 120);

      res.send(batting);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
}

// GET MATCHES DATA BY ID
const getPlayersMatchesDataByID = async (req, res) => {
  let _id = req.params.id;
  try {
    // Attempt to get data from the cache
    const cacheValue = await client.get(`player:matches`);

    if (cacheValue) {
      // Data is found in the cache
      const matches = JSON.parse(cacheValue);
      res.send(matches);
    } else {
      // Data is not in the cache, fetch it from the database
      const result = await CricketPlayer.findOne({ _id });

      if (!result) {
        return res.status(404).send({ message: 'CricketPlayer not found' });
      }

      const matches = result.statistics.matches;

      // Store the matches data in the cache with a 2-minute expiration
      await client.set(`player:matches`, JSON.stringify(matches), 'EX', 120);

      res.send(matches);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
}


// GET DATA BY ID
const getPlayersDataByID = async (req, res) => {
  let _id = req.params.id;
  try {
    // Attempt to get data from the cache
    const cacheValue = await client.get(`player:id`);

    if (cacheValue) {
      // Data is found in the cache
      const playerData = JSON.parse(cacheValue);
      res.send(playerData);
    } else {
      // Data is not in the cache, fetch it from the database
      const result = await CricketPlayer.findOne({ _id });

      if (!result) {
        return res.status(404).send({ message: 'CricketPlayer not found' });
      }

      // Store the player data in the cache with a 2-minute expiration
      await client.set(`player:id`, JSON.stringify(result), 'EX', 120);

      res.send(result);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
}

// GET FIELDING DATA BY ID
const getPlayersFieldingDataByID = async (req, res) => {
  let _id = req.params.id;
  try {
    // Attempt to get data from the cache
    const cacheValue = await client.get(`player:fielding`);

    if (cacheValue) {
      // Data is found in the cache
      const fielding = JSON.parse(cacheValue);
      res.send(fielding);
    } else {
      // Data is not in the cache, fetch it from the database
      const result = await CricketPlayer.findOne({ _id });

      if (!result) {
        return res.status(404).send({ message: 'CricketPlayer not found' });
      }

      const fielding = result.statistics.fielding;

      // Store the fielding data in the cache with a 2-minute expiration
      await client.set(`player:fielding`, JSON.stringify(fielding), 'EX', 120);

      res.send(fielding);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
}

// GET DATA BY PHONENUMBER
const getPlayersDataByPhoneNumber = async (req, res) => {
  let phoneNumber = req.params.phoneNumber;
  console.log(phoneNumber);
  try {
    // Attempt to get data from the cache
    const cacheValue = await client.get(`player:phoneNumber`);

    if (cacheValue) {
      // Data is found in the cache
      const playerData = JSON.parse(cacheValue);
      res.send(playerData);
    } else {
      // Data is not in the cache, fetch it from the database
      const result = await CricketPlayer.findOne({ 'personalInformation.phoneNumber': phoneNumber });

      if (!result) {
        return res.status(404).send({ message: 'CricketPlayer not found' });
      }

      // Store the player data in the cache with a 2-minute expiration
      await client.set(`player:phoneNumber`, JSON.stringify(result), 'EX', 120);

      res.send(result);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
}

// GET PLAYERS TEAMS DATA BY ID
const getPlayersTeamsDataByID = async (req, res) => {
  let _id = req.params.id;
  try {
    // Attempt to get data from the cache
    const cacheValue = await client.get(`player:teams`);

    if (cacheValue) {
      // Data is found in the cache
      const teams = JSON.parse(cacheValue);
      res.send(teams);
    } else {
      // Data is not in the cache, fetch it from the database
      const result = await CricketPlayer.findOne({ _id });

      if (!result) {
        return res.status(404).send({ message: 'CricketPlayer not found' });
      }

      const teams = result.cricketDetails.cricketTeams;

      // Store the teams data in the cache with a 2-minute expiration
      await client.set(`player:teams`, JSON.stringify(teams), 'EX', 120);

      res.send(teams);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
}

//POST DATA
const postPlayersData = async (req, res) => {
  let body = req.body
  console.log(body);
  let doc = new CricketPlayer(body)
  try {
    const result = await doc.save();
    console.log(result);
    res.send({ savedDocument: result })
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
}

// UPDATE DATA BY ID
const updatePlayersDataByID = async (req, res) => {
  const _id = req.params.id;
  const body = req.body;

  try {
    const result = await CricketPlayer.findOneAndUpdate({ _id }, { $set: body }, { new: true });

    if (!result) {
      return res.status(404).send({ message: 'CricketPlayer not found' });
    }
    res.send({ msg: "Updated Successfully!", updatedPlayer: result });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

// UPDATE PERSONAL INFORMATION DATA BY ID
const updatePlayersPersonalInformationDataByID = async (req, res) => {
  const _id = req.params.id;
  const body = req.body;

  try {

    // empty object
    let updatedData = {};

    //push body data in object
    for (const field in body) {
      updatedData[`personalInformation.${field}`] = body[field];
    }

    // update data using object
    const result = await CricketPlayer.findOneAndUpdate({ _id }, { $set: updatedData }, { new: true });

    // empty due to other requests data
    updatedData = {}

    if (!result) {
      return res.status(404).send({ message: 'CricketPlayer not found' });
    }
    res.send({ msg: "Updated Successfully!", updatedPlayer: result.personalInformation });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

// UPDATE CRICKET DETAILS DATA BY ID
const updatePlayersCricketDetailsDataByID = async (req, res) => {
  const _id = req.params.id;
  const body = req.body;

  try {

    // empty object
    let updatedData = {};

    //push body data in object
    for (const field in body) {
      updatedData[`cricketDetails.${field}`] = body[field];
    }

    // update data using object
    const result = await CricketPlayer.findOneAndUpdate({ _id }, { $set: updatedData }, { new: true });

    // empty due to other requests data
    updatedData = {}

    if (!result) {
      return res.status(404).send({ message: 'CricketPlayer not found' });
    }
    res.send({ msg: "Updated Successfully!", updatedPlayer: result.cricketDetails });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

// UPDATE STATISTICS DATA BY ID
const updatePlayersStatisticsDataByID = async (req, res) => {
  const _id = req.params.id;
  const body = req.body;

  try {

    // empty object
    let updatedData = {};

    //push body data in object
    for (const field in body) {
      updatedData[`statistics.${field}`] = body[field];
    }

    // update data using object
    const result = await CricketPlayer.findOneAndUpdate({ _id }, { $set: updatedData }, { new: true });

    // empty due to other requests data
    updatedData = {}

    if (!result) {
      return res.status(404).send({ message: 'CricketPlayer not found' });
    }
    res.send({ msg: "Updated Successfully!", updatedPlayer: result.statistics });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

// UPDATE MATCHES DATA BY ID
const updatePlayersMatchesDataByID = async (req, res) => {
  const _id = req.params.id;
  const body = req.body;

  try {

    // empty object
    let updatedData = {};

    //push body data in object
    for (const field in body) {
      updatedData[`statistics.matches.${field}`] = body[field];
    }

    // update data using object
    const result = await CricketPlayer.findOneAndUpdate({ _id }, { $set: updatedData }, { new: true });

    // empty due to other requests data
    updatedData = {}

    if (!result) {
      return res.status(404).send({ message: 'CricketPlayer not found' });
    }
    res.send({ msg: "Updated Successfully!", updatedPlayer: result.statistics.matches });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

// UPDATE BOWLING DATA BY ID
const updatePlayersBowlingDataByID = async (req, res) => {
  const _id = req.params.id;
  const body = req.body;

  try {

    // empty object
    let updatedData = {};

    //push body data in object
    for (const field in body) {
      updatedData[`statistics.bowling.${field}`] = body[field];
    }

    // update data using object
    const result = await CricketPlayer.findOneAndUpdate({ _id }, { $set: updatedData }, { new: true });

    // empty due to other requests data
    updatedData = {}

    if (!result) {
      return res.status(404).send({ message: 'CricketPlayer not found' });
    }
    res.send({ msg: "Updated Successfully!", updatedPlayer: result.statistics.bowling });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

// UPDATE BATTING DATA BY ID
const updatePlayersBattingDataByID = async (req, res) => {
  const _id = req.params.id;
  const body = req.body;

  try {

    // empty object
    let updatedData = {};

    //push body data in object
    for (const field in body) {
      updatedData[`statistics.batting.${field}`] = body[field];
    }

    // update data using object
    const result = await CricketPlayer.findOneAndUpdate({ _id }, { $set: updatedData }, { new: true });

    // empty due to other requests data
    updatedData = {}

    if (!result) {
      return res.status(404).send({ message: 'CricketPlayer not found' });
    }
    res.send({ msg: "Updated Successfully!", updatedPlayer: result.statistics.batting });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

// UPDATE FIELDING DATA BY ID
const updatePlayersFieldingDataByID = async (req, res) => {
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

// DELETE DATA BY ID
const deletePlayersDataByID = async (req, res) => {
  const _id = req.params.id
  try {
    const result = await CricketPlayer.findOneAndDelete({ _id })
    if (!result) {
      return res.status(404).send({ message: 'CricketPlayer not found' });
    }
    res.send({ msg: "Deleted Successfully!" })
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
}

// ADD TEAM IN PLAYER DATA BY ID
const addTeamInPlayerDataByID = async (req, res) => {
  try {
    // find team 
    const teamID = req.params.teamId;
    const data = await fetch(`http://localhost:5000/teams/${teamID}`);
    const teamData = await data.json()

    // destructure id and name
    const team_id = teamData._id
    const team_name = teamData.teamInformation.name

    //find player
    const _id = req.params.playerId;
    const result = await CricketPlayer.findOne({ _id })

    if (!result) {
      return res.status(404).send({ message: "Team does not found!" });
    }

    const teamsArray = result.cricketDetails.cricketTeams

    // find duplicate values
    const foundObject = teamsArray.find((element) => element.team_id === team_id);
    if (foundObject) {
      return res.status(404).send({ message: "Not allowed dulpicate players!" });
    }

    //push data in player
    result.cricketDetails.cricketTeams.push({ team_id, team_name })
    await result.save();
    res.send({ updated: result.cricketDetails.cricketTeams });

    // now push data in team
    const response = await fetch(`http://localhost:5000/teams/${req.params.teamId}/players/${req.params.playerId}`, {
      method: 'post',
    });
    const data1 = await response.json();


  }
  catch (e) {
    console.log(e);
  }
}

// REMOVE TEAM IN PLAYER DATA BY ID
const removeTeamInPlayerDataByID = async (req, res) => {
  try {
    // find team
    const teamID = req.params.teamId;

    //find team
    const _id = req.params.playerId;
    const result = await CricketPlayer.findOne({ _id })

    // if not found
    if (!result) {
      return res.status(404).send({ message: "Player does not found!" });
    }

    //remove data in team
    const players = result.cricketDetails.cricketTeams
    //  console.log(players);

    // filter data from array
    const filteredTeams = players.filter((item) => item.team_id !== teamID);
    result.cricketDetails.cricketTeams = filteredTeams

    // save in database
    await result.save()
    res.send({ result: result.cricketDetails.cricketTeams });

    // now push data in team
    const response = await fetch(`http://localhost:5000/teams/${req.params.teamId}/players/${req.params.playerId}`, {
      method: 'delete',
    });
    const data1 = await response.json();

  }
  catch (e) {
    console.log(e);
  }
}

module.exports = {
  updatePlayersCricketDetailsDataByID, getPlayersDataByPhoneNumber, getPlayersData, getPlayersDataByID, postPlayersData, updatePlayersDataByID, deletePlayersDataByID, getPlayersPersonalInformationDataByID, getPlayersCricketDetailsDataByID, getPlayersStatisticsDataByID, getPlayersMatchesDataByID, getPlayersBowlingDataByID, getPlayersBattingDataByID, getPlayersFieldingDataByID, updatePlayersPersonalInformationDataByID, updatePlayersStatisticsDataByID, updatePlayersMatchesDataByID, updatePlayersBowlingDataByID, updatePlayersBattingDataByID, updatePlayersFieldingDataByID, getPlayersTeamsDataByID, addTeamInPlayerDataByID, removeTeamInPlayerDataByID
};
