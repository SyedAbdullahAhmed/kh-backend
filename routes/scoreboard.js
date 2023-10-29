const express = require('express');
const {getScoreboardData,getScoreboardDataByID,postScoreboardData,updateScoreboardDataByID,deleteScoreboardDataByID} = require('../controllers/scoreboard')

const router = express.Router();

// get scoreboard data
router.get('/scoreboard',getScoreboardData)

// get scoreboard data by id
router.get('/scoreboard/:id',getScoreboardDataByID)

// post scoreboard data
router.post('/scoreboard',postScoreboardData)

// update scoreboard data
router.put('/scoreboard/:id',updateScoreboardDataByID)

// delete scoreboard data
router.delete('/scoreboard/:id',deleteScoreboardDataByID)

module.exports = router;

