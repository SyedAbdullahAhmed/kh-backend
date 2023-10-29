const mongoose = require('mongoose')
const Scoreboard = require('../models/scoreboard')

// GET SCOREBOARD DATA
const getScoreboardData = async (req, res) => {
     try {
          //find data
          const result = await Scoreboard.find()
          res.send(result)
     } catch (error) {
          console.log(error);
          res.status(500).send({ message: 'Internal Server Error' });
     }
}

// GET SCOREBOARD DATA BY ID
const getScoreboardDataByID = async (req, res) => {
     //id from parameter
     const _id = req.params.id;
     try {
          const result = await Scoreboard.findOne({ _id })
          if (!result) {
               return res.status(404).send({ message: 'Scoreboard not found' });
          }
          res.send(result)
     } catch (error) {
          console.log(error);
          res.status(500).send({ message: 'Internal Server Error' });
     }
}


//POST SCOREBOARD DATA
const postScoreboardData = async (req, res) => {
     let body = req.body
     console.log(body);
     let doc = new Scoreboard(body)
     console.log(doc)
     try {
          const result = await doc.save();
          res.send({ msg: "Save Document Successfully!" , savedDocument : result })
     } catch (error) {
          console.log(error);
          res.status(500).send({ message: 'Internal Server Error' });
     }
}

// UPDATE SCOREBOARD DATA BY ID
const updateScoreboardDataByID = async (req, res) => {
     const _id = req.params.id;
     const body = req.body;

     try {
          const result = await Scoreboard.findOneAndUpdate({ _id }, { $set: body }, { new: true });

          if (!result) {
               return res.status(404).send({ message: 'Scoreboard not found' });
          }
          res.send({ msg: "Updated Successfully!", updatedMatch: result });
     } catch (error) {
          console.log(error);
          res.status(500).send({ message: 'Internal Server Error' });
     }
};

// DELETE SCOREBOARD DATA BY ID
const deleteScoreboardDataByID = async (req, res) => {
     const _id = req.params.id
     try {
          const result = await Scoreboard.findOneAndDelete({ _id })
          if (!result) {
               return res.status(404).send({ message: 'Scoreboard not found' });
          }
          res.send({ msg: "Deleted Successfully!" })
     } catch (error) {
          console.log(error);
          res.status(500).send({ message: 'Internal Server Error' });
     }
}


module.exports = { getScoreboardData, getScoreboardDataByID, postScoreboardData, updateScoreboardDataByID, deleteScoreboardDataByID };