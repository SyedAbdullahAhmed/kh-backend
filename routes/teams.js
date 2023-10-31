const express = require('express');
const {removePlayerInTeamByID,getTeamPlayersDataByID,getTeamInformationDataByID,getTeamStatisticsDataByID,getTeamsData,getTeamsDataByID,postTeamsData,updateTeamsDataByID,deleteTeamsDataByID,addPlayerInTeamByID,updateTeamStatisticsDataByID,updateTeamInformationDataByID} = require('../controllers/teams')

const router = express.Router();


/**
 * GET METHODS
 */

// get teams data
router.get('/teams',getTeamsData)

// get team data by id
router.get('/teams/:id',getTeamsDataByID)

// get team statistics data by id
router.get('/teams/:id/teamStatistics',getTeamStatisticsDataByID)

// get team information data by id
router.get('/teams/:id/teamInformation',getTeamInformationDataByID)

// get team information data by id
router.get('/teams/:id/players',getTeamPlayersDataByID)

/**
 * POST METHODS
 */

// add player in team by id
router.post('/teams/:teamId/players/:playerId', addPlayerInTeamByID);

// post teams
router.post('/teams',postTeamsData)

/**
 * PUT METHODS
 */

// update teams
router.put('/teams/:id',updateTeamsDataByID)

// update team statistics data by id
router.put('/teams/:id/teamStatistics',updateTeamStatisticsDataByID)

// update team information data by id
router.put('/teams/:id/teamInformation',updateTeamInformationDataByID)

/**
 * DELETE METHODS
 */

// remove player in team by id
router.delete('/teams/:teamId/players/:playerId', removePlayerInTeamByID);

// delete team
router.delete('/teams/:id',deleteTeamsDataByID)

module.exports = router;

