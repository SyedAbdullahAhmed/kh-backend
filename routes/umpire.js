const express = require('express');
const {getUmpiresData,getUmpiresDataByID,postUmpiresData,updateUmpiresDataByID,deleteUmpiresDataByID} = require('../controllers/umpire')

const router = express.Router();

// get all umpires data
router.get('/umpires',getUmpiresData)

// get umpires data by id
router.get('/umpires/:id',getUmpiresDataByID)

// post umpires data
router.post('/umpires',postUmpiresData)

// update umpires data
router.put('/umpires/:id',updateUmpiresDataByID)

// delete umpires data
router.delete('/umpires/:id',deleteUmpiresDataByID)

module.exports = router;
