const mongoose = require('mongoose')
const Umpire = require('../models/umpire')
const client = require('../redis/client');

// GET UMPIRES DATA
const getUmpiresData = async (req, res) => {
  try {
    // Attempt to get data from the cache
    const cacheValue = await client.get('umpires');

    if (cacheValue) {
      // Data is found in the cache
      const result = JSON.parse(cacheValue);
      res.send(result);
    } else {
      // Data is not in the cache, fetch it from the database
      const result = await Umpire.find();

      // Store the data in the cache with a 2-minute expiration
      await client.set('umpires', JSON.stringify(result), 'EX', 120);

      res.send(result);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
}

// GET UMPIRES DATA BY ID
const getUmpiresDataByID = async (req, res) => {
  let _id = req.params.id;
  try {
    // Attempt to get data from the cache
    const cacheValue = await client.get(`umpire:${_id}`);

    if (cacheValue) {
      // Data is found in the cache
      const umpireData = JSON.parse(cacheValue);
      res.send(umpireData);
    } else {
      // Data is not in the cache, fetch it from the database
      const result = await Umpire.findOne({ _id });

      if (!result) {
        return res.status(404).send({ message: 'Umpire not found' });
      }

      // Store the umpire data in the cache with a 2-minute expiration
      await client.set(`umpire:${_id}`, JSON.stringify(result), 'EX', 120);

      res.send(result);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
}

// GET UMPIRES MATCH HISTORY DATA BY ID
const getUmpiresMatchHistoryDataByID = async (req, res) => {
  //id from parameter
  let _id = req.params.id;
  try {
    const result = await Umpire.findOne({ _id })
    if (!result) {
      return res.status(404).send({ message: 'Umpire not found' });
    }
    res.send(result.match_history)
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
}

//POST UMPIRE DATA
const postUmpiresData = async (req, res) => {
  let body = req.body
  console.log(body);
  let doc = new Umpire(body)
  try {
    const result = await doc.save();
    console.log(result);
    res.send({ msg: "Save Document Successfully!", document: result })
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
}

// UPDATE UMPIRE DATA BY ID
const updateUmpiresDataByID = async (req, res) => {
  const _id = req.params.id;
  const body = req.body;

  try {
    const result = await Umpire.findOneAndUpdate({ _id }, { $set: body }, { new: true });

    if (!result) {
      return res.status(404).send({ message: 'Umpire not found' });
    }
    res.send({ msg: "Updated Successfully!", updatedUmpire: result });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

// DELETE UMPIRE DATA BY ID
const deleteUmpiresDataByID = async (req, res) => {
  const _id = req.params.id
  try {
    const result = await Umpire.findOneAndDelete({ _id })
    if (!result) {
      return res.status(404).send({ message: 'Umpire not found' });
    }
    res.send({ msg: "Deleted Successfully!" })
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
}

// GET UMPIRES PERONSAL INFORMATION BY ID
const getUmpiresPersonalInformationDataByID = async (req, res) => {

  let _id = req.params.id;
  try {
    const result = await Umpire.findOne({ _id })
    if (!result) {
      return res.status(404).send({ message: 'Umpire not found' });
    }
    res.send(result.personal_information)
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

// UPDATE UMPIRES PERONSAL INFORMATION BY ID
const updateUmpiresPersonalInformationDataByID = async (req, res) => {
  const _id = req.params.id;
  const body = req.body;

  try {

    // empty object
    let updatedData = {};

    //push body data in object
    for (const field in body) {
      updatedData[`personal_information.${field}`] = body[field];
    }

    // update data using object
    const result = await Umpire.findOneAndUpdate({ _id }, { $set: updatedData }, { new: true });

    // empty due to other requests data
    updatedData = {}

    if (!result) {
      return res.status(404).send({ message: 'Umpire not found' });
    }
    res.send({ msg: "Updated Successfully!", updatedPlayer: result.personal_information });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }

};

// POST UMPIRES MATCH HISTORY
const postUmpiresMatchHistoryDataByID = async (req, res) => {
  try {
    // find match
    const matchID = req.params.matchId;
    const data = await fetch(`http://localhost:5000/matches/${matchID}`);
    const matchData = await data.json()

    // find umpire
    const _id = req.params.umpireId;
    const result = await Umpire.findOne({ _id })
    if (!result) {
      return res.status(404).send({ message: "Umpire does not found!" });
    }

    // destructure match history
    const matchHistory = matchData.matchInformation
    const {date,time,venue,matchStatus,scoreboardID} = matchHistory
    
    const updatedObj = {
       "date": date,
       "time" : time,
       "venue" : venue,
       "matchStatus" : matchStatus,
       "scoreboardID" : scoreboardID,
       "match_id" : matchData._id
      }

    const history = result.match_history

    // find duplicate values
    const foundHistory = history.find((element) => element.match_id === matchID);
    if(foundHistory){
      return res.status(404).send({message : "Not allowed dulpicate match history!"}); 
    }
    //push match history
    result.match_history.push(updatedObj)
    await result.save();
    res.send({result : result.match_history})
  }
  catch (e) {
    console.log(e);
  }
}

// DELETE UMPIRES MATCH HISTORY
const deleteUmpiresMatchHistoryDataByID = async (req, res) => {
  try {
    // find team
    const matchID = req.params.matchId;

    //find team
    const _id = req.params.umpireId;
    const result = await Umpire.findOne({ _id })

    // if not found
    if (!result) {
      return res.status(404).send({ message: "Umpire does not found!" });
    }

    //remove data in team
    const matchHistory = result.match_history

    // filter data from array
    const filteredUmpire = matchHistory.filter((item) => item.match_id !== matchID);
    result.match_history = filteredUmpire

    // save in database
    await result.save()
    res.send({ afterDeletion: result.match_history });

  }
  catch (e) {
    console.log(e);
  }
}
module.exports = { updateUmpiresPersonalInformationDataByID, getUmpiresPersonalInformationDataByID, getUmpiresData, getUmpiresDataByID, postUmpiresData, updateUmpiresDataByID, deleteUmpiresDataByID, getUmpiresMatchHistoryDataByID, postUmpiresMatchHistoryDataByID, deleteUmpiresMatchHistoryDataByID };