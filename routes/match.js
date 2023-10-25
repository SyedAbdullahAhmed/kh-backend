const express = require('express');
const {getMatchData,getMatchDataByID,postMatch} = require('../controllers/match')

const router = express.Router();

// get players data
router.get('/match',getMatchData)

// get players data by id
router.get('/match/:id',getMatchDataByID)

// // get players data by phoneNumber
// router.get('/players/phoneNumber/:phoneNumber',getPlayersDataByPhoneNumber)

/// post players data
router.post('/match',postMatch)

// // update players data
// router.put('/players/:id',updatePlayersDataByID)

// // delete players data
// router.delete('/players/:id',deletePlayersDataByID)

module.exports = router;


getMatchData,getMatchDataByID,postMatch