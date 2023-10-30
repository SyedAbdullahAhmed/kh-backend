const express = require('express');
const {removePlayerInTeamByID,getTeamPlayersDataByID,getTeamInformationDataByID,getTeamStatisticsDataByID,getTeamsData,getTeamsDataByID,postTeamsData,updateTeamsDataByID,deleteTeamsDataByID,addPlayerInTeamByID} = require('../controllers/teams')

const router = express.Router();

// get teams data
router.get('/teams',getTeamsData)

// get team data by id
router.get('/teams/:id',getTeamsDataByID)

// get team statistics data by id
router.get('/teams/:id/statistics',getTeamStatisticsDataByID)

// get team information data by id
router.get('/teams/:id/information',getTeamInformationDataByID)

// get team information data by id
router.get('/teams/:id/players',getTeamPlayersDataByID)

// add player in team by id
router.post('/teams/:teamId/players/:playerId', addPlayerInTeamByID);

// remove player in team by id
router.delete('/teams/:teamId/players/:playerId', removePlayerInTeamByID);

// post teams
router.post('/teams',postTeamsData)

// update teams
router.put('/teams/:id',updateTeamsDataByID)

// delete team
router.delete('/teams/:id',deleteTeamsDataByID)

module.exports = router;
