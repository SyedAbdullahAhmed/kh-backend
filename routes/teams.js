const express = require('express');
const {getTeamsData,getTeamsDataByID,postTeamsData,updateTeamsDataByID,deleteTeamsDataByID} = require('../controllers/teams')

const router = express.Router();

// get teams data
router.get('/teams',getTeamsData)

// get team data by id
router.get('/teams/:id',getTeamsDataByID)

// post teams
router.post('/teams',postTeamsData)

// update teams
router.put('/teams/:id',updateTeamsDataByID)

// delete team
router.delete('/teams/:id',deleteTeamsDataByID)

module.exports = router;
