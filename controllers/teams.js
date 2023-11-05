const mongoose = require('mongoose')
const CricketTeams = require('../models/teams')
const client = require('../redis/client');

// GET TEAMS DATA
const getTeamsData = async (req, res) => {
  try {
    // Attempt to get data from the cache
    const cacheValue = await client.get('teams');

    if (cacheValue) {
      // Data is found in the cache
      const result = JSON.parse(cacheValue);

      res.send(result);
    } else {
      // Data is not in the cache, fetch it from the database
      const result = await CricketTeams.find();

      // Store the data in the cache with a 2-minute expiration
      await client.set('teams', JSON.stringify(result), 'EX', 60);

      res.send(result);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

// GET TEAM DATA BY ID
const getTeamsDataByID = async (req, res) => {
  let _id = req.params.id;
  try {
    // Attempt to get data from the cache
    const cacheValue = await client.get(`team:dataByID`);

    if (cacheValue) {
      // Data is found in the cache
      const result = JSON.parse(cacheValue);

      res.send(result);
    } else {
      // Data is not in the cache, fetch it from the database
      const result = await CricketTeams.findOne({ _id });

      if (!result) {
        return res.status(404).send({ message: "Team does not found!" });
      }

      // Store the data in the cache with a 2-minute expiration
      await client.set(`team:dataByID`, JSON.stringify(result), 'EX', 120);

      res.send(result);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
}

// GET TEAM STATISTICS DATA BY ID
const getTeamStatisticsDataByID = async (req, res) => {
  let _id = req.params.id;
  try {
    // Attempt to get data from the cache
    const cacheValue = await client.get(`team:statistics`);

    if (cacheValue) {
      // Data is found in the cache
      const statistics = JSON.parse(cacheValue);

      res.send(statistics);
    } else {
      // Data is not in the cache, fetch it from the database
      const result = await CricketTeams.findOne({ _id });

      if (!result) {
        return res.status(404).send({ message: "Team does not found!" });
      }

      const statistics = result.teamStatistics;

      // Store the statistics in the cache with a 2-minute expiration
      await client.set(`team:statistics`, JSON.stringify(statistics), 'EX', 120);

      res.send(statistics);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
}

// GET TEAM INFORMATION DATA BY ID
const getTeamInformationDataByID = async (req, res) => {
  let _id = req.params.id;
  try {
    // Attempt to get data from the cache
    const cacheValue = await client.get(`team:information`);

    if (cacheValue) {
      // Data is found in the cache
      const information = JSON.parse(cacheValue);

      res.send(information);
    } else {
      // Data is not in the cache, fetch it from the database
      const result = await CricketTeams.findOne({ _id });

      if (!result) {
        return res.status(404).send({ message: "Team does not found!" });
      }

      const information = result.teamInformation;

      // Store the information in the cache with a 2-minute expiration
      await client.set(`team:information`, JSON.stringify(information), 'EX', 120);

      res.send(information);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
}

// GET TEAM PLAYERS DATA BY ID
const getTeamPlayersDataByID = async (req, res) => {
  let _id = req.params.id;
  try {
    // Attempt to get data from the cache
    const cacheValue = await client.get(`team:players`);

    if (cacheValue) {
      // Data is found in the cache
      const players = JSON.parse(cacheValue);

      res.send(players);
    } else {
      // Data is not in the cache, fetch it from the database
      const result = await CricketTeams.findOne({ _id });

      if (!result) {
        return res.status(404).send({ message: "Team does not found!" });
      }

      const players = result.teamInformation.players;

      // Store the players data in the cache with a 2-minute expiration
      await client.set(`team:players`, JSON.stringify(players), 'EX', 120);

      res.send(players);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
}

//POST TEAMS
const postTeamsData = async (req, res) => {
  let body = req.body
  console.log(body);
  let doc = new CricketTeams(body)
  try {
    const result = await doc.save();
    console.log(result);
    res.send({ msg: "Save Document Successfully!" })
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
}

// ADD PLAYER IN A TEAM BY ID
const addPlayerInTeamByID = async (req, res) => {
  try {
    // find player 
    const playerID = req.params.playerId;
    const data = await fetch(`http://localhost:5000/players/${playerID}`);
    const playerData = await data.json()

    const p_id = playerData._id
    const p_name = playerData.personalInformation.fullName

    //find team
    const _id = req.params.teamId;
    const result = await CricketTeams.findOne({ _id })

    if (!result) {
      return res.status(404).send({ message: "Team does not found!" });
    }

    // check for players
    if (result.teamInformation.players.length > 12) {
      return res.status(404).send({ message: "Team has maximum 11 players!" });
    }
    const playersArray = result.teamInformation.players

    // find duplicate 
    const foundObject = playersArray.find((element) => element.p_id === p_id);
    if (foundObject) {
      return res.status(404).send({ message: "Not allowed dulpicate players!" });
    }
    //push data in team
    result.teamInformation.players.push({ p_id, p_name })
    await result.save();
    res.send({ updated: result.teamInformation.players });

    // now push data in player
    const response = await fetch(`http://localhost:5000/players/${req.params.playerId}/teams/${req.params.teamId}`, {
      method: 'post',
    });
    const data1 = await response.json();
  }
  catch (e) {
    console.log(e);
  }
}

// REMOVE PLAYER IN A TEAM BY ID
const removePlayerInTeamByID = async (req, res) => {
  try {
    // find player 
    const playerID = req.params.playerId;

    //find team
    const _id = req.params.teamId;
    const result = await CricketTeams.findOne({ _id })

    if (!result) {
      return res.status(404).send({ message: "Team does not found!" });
    }

    //remove data in team
    const players = result.teamInformation.players

    // filter data from array
    const filteredPlayers = players.filter((item) => item.p_id !== playerID);
    result.teamInformation.players = filteredPlayers

    // save in database
    await result.save();
    res.send({ result : result.teamInformation.players });

    // now push data in player
    const response = await fetch(`http://localhost:5000/players/${req.params.playerId}/teams/${req.params.teamId}`, {
      method: 'delete',
    });
    const data1 = await response.json();
    // console.log(data1);

  }
  catch (e) {
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
      return res.status(404).send({ message: "Team does not found!" });
    }
    res.send({ msg: "Updated Successfully!", updatedTeam: result });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

// DELETE TEAM BY ID
const deleteTeamsDataByID = async (req, res) => {
  const _id = req.params.id
  try {
    const result = await CricketTeams.findOneAndDelete({ _id })
    if (!result) {
      return res.status(404).send({ message: "Team does not found!" });
    }
    res.send({ msg: "Deleted Successfully!" })
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
}

// UPDATE TEAM STATISTICS DATA BY ID
const updateTeamStatisticsDataByID = async (req, res) => {
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
    const result = await CricketTeams.findOneAndUpdate({ _id }, { $set: updatedData }, { new: true });

    // empty due to other requests data
    updatedData = {}

    if (!result) {
      return res.status(404).send({ message: 'CricketTeams not found' });
    }
    res.send({ msg: "Updated Successfully!", updatedPlayer: result.teamStatistics });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
}

// UPDATE TEAM INFORMATION DATA BY ID
const updateTeamInformationDataByID = async (req, res) => {
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
    const result = await CricketTeams.findOneAndUpdate({ _id }, { $set: updatedData }, { new: true });

    // empty due to other requests data
    updatedData = {}

    if (!result) {
      return res.status(404).send({ message: 'CricketTeams not found' });
    }
    res.send({ msg: "Updated Successfully!", updatedPlayer: result.teamInformation });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
}

// GET MATCH HISTORY BY ID
const getTeamsMatchHistoryDataByID = async (req, res) => {
  let _id = req.params.id;
  try {
    // Attempt to get data from the cache
    const cacheValue = await client.get(`team:matchHistory`);

    if (cacheValue) {
      // Data is found in the cache
      const matchHistory = JSON.parse(cacheValue);
      res.send(matchHistory);
    } else {
      // Data is not in the cache, fetch it from the database
      const result = await CricketTeams.findOne({ _id });

      if (!result) {
        return res.status(404).send({ message: "Team does not found!" });
      }

      const matchHistory = result.matchHistory;

      // Store the match history in the cache with a 2-minute expiration
      await client.set(`team:matchHistory`, JSON.stringify(matchHistory), 'EX', 120);

      res.send(matchHistory);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
}

// POST MATCH HISTORY BY ID
const postTeamsMatchHistoryDataByID = async (req, res) => {
  try {
    // find match
    const matchID = req.params.matchId;
    const data = await fetch(`http://localhost:5000/matches/${matchID}`);
    const matchData = await data.json()

    // find umpire
    const _id = req.params.teamId;
    const result = await CricketTeams.findOne({ _id })
    if (!result) {
      return res.status(404).send({ message: "Umpire does not found!" });
    }

    // destructure match history
    const { date, time, venue, matchStatus, scoreboardID } = matchData.matchInformation

    const updatedObj = {
      "date": date,
      "time": time,
      "venue": venue,
      "matchStatus": matchStatus,
      "scoreboardID": scoreboardID,
      "match_id": matchData._id
    }

    const history = result.matchHistory

    // find duplicate values
    const foundHistory = history.find((element) => element.match_id === matchID);
    if (foundHistory) {
      return res.status(404).send({ message: "Not allowed dulpicate match history!" });
    }
    // //push match history
    result.matchHistory.push(updatedObj)
    await result.save();
    res.send(result.matchHistory)
  }
  catch (e) {
    console.log(e);
  }
}

// DELETE MATCH HISTORY BY ID
const deleteTeamsMatchHistoryDataByID = async (req, res) => {
  try {
    // find team
    const matchID = req.params.matchId;

    //find team
    const _id = req.params.teamId;
    const result = await CricketTeams.findOne({ _id })

    // if not found
    if (!result) {
      return res.status(404).send({ message: "Team does not does not found!" });
    }

    //remove data in team
    const matchHistory = result.matchHistory

    // filter data from array
    const filteredHistory = matchHistory.filter((item) => item.match_id !== matchID);
    result.matchHistory = filteredHistory

    // save in database
    await result.save()
    res.send({ afterDeletion: result.matchHistory });

  }
  catch (e) {
    console.log(e);
  }
}

module.exports = { removePlayerInTeamByID, getTeamPlayersDataByID, getTeamInformationDataByID, getTeamStatisticsDataByID, addPlayerInTeamByID, getTeamsData, getTeamsDataByID, postTeamsData, updateTeamsDataByID, deleteTeamsDataByID, updateTeamStatisticsDataByID, updateTeamInformationDataByID, getTeamsMatchHistoryDataByID, postTeamsMatchHistoryDataByID, deleteTeamsMatchHistoryDataByID };
