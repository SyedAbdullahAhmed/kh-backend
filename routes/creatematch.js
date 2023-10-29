const express = require('express');
const {postUmipreFromID,postTeamFromID,postMatchData,getMatchesData,getMatchesDataByID,updateMatchesDataByID,deleteMatchesDataByID} = require('../controllers/creatematch')

const router = express.Router();

// get matches data
router.get('/matches',getMatchesData)

// get matches data by id
router.get('/matches/:id',getMatchesDataByID)

// post umipre from id
router.post('/matches/:matchId/umpire/:umpireId',postUmipreFromID)

// post team from id
router.post('/matches/:matchId/team/:teamId',postTeamFromID)

// post matches data
router.post('/matches',postMatchData)

// update matches data
router.put('/matches/:id',updateMatchesDataByID)

// delete matches data
router.delete('/matches/:id',deleteMatchesDataByID)

module.exports = router;
