const express = require('express');
const {deleteUmipreByID,updateMatchesTeamDataByID,updateMatchesInformationDataByID,updateMatchesUmpiresDataByID,getMatchesInformationDataByID,getMatchesTeamsDataByID,getMatchesUmpiresDataByID,postUmipreFromID,postTeamFromID,postMatchData,getMatchesData,getMatchesDataByID,updateMatchesDataByID,deleteMatchesDataByID} = require('../controllers/creatematch')

const router = express.Router();

/**
 * GET METHODS
 */

// get matches data
router.get('/matches',getMatchesData)

// get matches data by id
router.get('/matches/:id',getMatchesDataByID)

// get match information data by id
router.get('/matches/:id/matchInformation',getMatchesInformationDataByID)

// get match teams data by id
router.get('/matches/:id/teams',getMatchesTeamsDataByID)

// get match umpires data by id
router.get('/matches/:id/umpires',getMatchesUmpiresDataByID)

/**
 * POST METHODS
 */

// post umipre from id
router.post('/matches/:matchId/umpire/:umpireId',postUmipreFromID)

// post team from id
router.post('/matches/:matchId/team/:teamId',postTeamFromID)

// post matches data
router.post('/matches',postMatchData)

/**
 * PUT METHODS
 */

// update matches data
router.put('/matches/:id',updateMatchesDataByID)

// update match information data by id
router.put('/matches/:id/matchInformation',updateMatchesInformationDataByID)

// update match teams data by id
router.put('/matches/:matchId/team/:teamId',updateMatchesTeamDataByID)

// update match umpire data by id
router.put('/matches/:id/umpires',updateMatchesUmpiresDataByID)

/**
 * DELETE METHODS
 */

// delete matches data
router.delete('/matches/:id',deleteMatchesDataByID)

// delete umipre from id
router.delete('/matches/:matchId/umpire/:umpireId',deleteUmipreByID)

module.exports = router;


