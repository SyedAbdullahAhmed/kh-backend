const express = require('express');
const {getTeamsData,getTeamsDataByID,postTeamsData,updateTeamsDataByID,deleteTeamsDataByID,addPlayerInTeamByID} = require('../controllers/teams')

const router = express.Router();

// get teams data
router.get('/teams',getTeamsData)

// get team data by id
router.get('/teams/:id',getTeamsDataByID)

// add player in team by id
router.post('/teams/:teamId/players/:playerId', addPlayerInTeamByID);

// post teams
router.post('/teams',postTeamsData)

// update teams
router.put('/teams/:id',updateTeamsDataByID)

// delete team
router.delete('/teams/:id',deleteTeamsDataByID)

module.exports = router;
