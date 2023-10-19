const express = require('express');
const {getPlayersDataByPhoneNumber,getPlayersData,getPlayersDataByID,postPlayersData,updatePlayersDataByID,deletePlayersDataByID} = require('../controllers/player')

const router = express.Router();

// get players data
router.get('/players',getPlayersData)

// get players data by id
router.get('/players/:id',getPlayersDataByID)

// get players data by phoneNumber
router.get('/players/phoneNumber/:phoneNumber',getPlayersDataByPhoneNumber)

// post players data
router.post('/players',postPlayersData)

// update players data
router.put('/players/:id',updatePlayersDataByID)

// delete players data
router.delete('/players/:id',deletePlayersDataByID)

module.exports = router;
