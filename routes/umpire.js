const express = require('express');
const {updateUmpiresPersonalInformationDataByID,getUmpiresData,getUmpiresPersonalInformationDataByID,getUmpiresDataByID,postUmpiresData,updateUmpiresDataByID,deleteUmpiresDataByID,getUmpiresMatchHistoryDataByID,postUmpiresMatchHistoryDataByID,deleteUmpiresMatchHistoryDataByID} = require('../controllers/umpire')

const router = express.Router();


/**
 * GET REQUEST
 */

// get all umpires data
router.get('/umpires',getUmpiresData)

// get umpires data by id
router.get('/umpires/:id',getUmpiresDataByID)

// get umpires match history data by id
router.get('/umpires/:id/matchHistory',getUmpiresMatchHistoryDataByID)

// get umpires personal information data by id
router.get('/umpires/:id/personalInformation',getUmpiresPersonalInformationDataByID)

/**
 * POST REQUEST
 */

// post umpires data
router.post('/umpires',postUmpiresData)

// postumpires match history data by id
router.post('/umpires/:umpireId/matchHistory/:matchId',postUmpiresMatchHistoryDataByID)

/**
 * PUT REQUEST
 */

// update umpires data
router.put('/umpires/:id',updateUmpiresDataByID)

// update umpires peronal information data
router.put('/umpires/:id/personalInformation',updateUmpiresPersonalInformationDataByID)

/**
 * DELETE REQUEST
 */

// delete umpires data
router.delete('/umpires/:id',deleteUmpiresDataByID)

// delete umpires match history data by id
router.delete('/umpires/:umpireId/matchHistory/:matchId',deleteUmpiresMatchHistoryDataByID)

module.exports = router;

 