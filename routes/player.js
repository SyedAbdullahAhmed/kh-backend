const express = require('express');
const {getPlayersDataByPhoneNumber,getPlayersData,getPlayersDataByID,postPlayersData,updatePlayersDataByID,deletePlayersDataByID,getPlayersPersonalInformationDataByID,getPlayersCricketDetailsDataByID,getPlayersStatisticsDataByID,getPlayersMatchesDataByID,getPlayersBowlingDataByID,getPlayersBattingDataByID,getPlayersFieldingDataByID,updatePlayersPersonalInformationDataByID
} = require('../controllers/player')

const router = express.Router();

/**
 * GET REQUEST
 */

// get players data
router.get('/players',getPlayersData)

// get players data by id
router.get('/players/:id',getPlayersDataByID)

// get players personalInformation data by id
router.get('/players/:id/personalInformation',getPlayersPersonalInformationDataByID)

// get players cricketDetails data by id
router.get('/players/:id/cricketDetails',getPlayersCricketDetailsDataByID)

// get players statistics data by id
router.get('/players/:id/statistics',getPlayersStatisticsDataByID)

// get players matches data by id
router.get('/players/:id/matches',getPlayersMatchesDataByID)

// get players bowling data by id
router.get('/players/:id/bowling',getPlayersBowlingDataByID)

// get players batting data by id
router.get('/players/:id/batting',getPlayersBattingDataByID)

// get players fielding data by id
router.get('/players/:id/fielding',getPlayersFieldingDataByID)

// get players data by phoneNumber
router.get('/players/phoneNumber/:phoneNumber',getPlayersDataByPhoneNumber)


/**
 * PUT REQUEST
 */

// get players personalInformation data by id
router.put('/players/:id/personalInformation',updatePlayersPersonalInformationDataByID)

// // get players cricketDetails data by id
// router.put('/players/:id/cricketDetails',updatePlayersCricketDetailsDataByID)

// // get players statistics data by id
// router.put('/players/:id/statistics',updatePlayersStatisticsDataByID)

// // get players matches data by id
// router.put('/players/:id/matches',updatePlayersMatchesDataByID)

// // get players bowling data by id
// router.put('/players/:id/bowling',updatePlayersBowlingDataByID)

// // get players batting data by id
// router.put('/players/:id/batting',updatePlayersBattingDataByID)

// // get players fielding data by id
// router.put('/players/:id/fielding',updatePlayersFieldingDataByID)

// update players data
router.put('/players/:id',updatePlayersDataByID)

/**
 * POST REQUEST
 */
// post players data
router.post('/players',postPlayersData)

/**
 * DELETE REQUEST
 */
// delete players data
router.delete('/players/:id',deletePlayersDataByID)

module.exports = router;

