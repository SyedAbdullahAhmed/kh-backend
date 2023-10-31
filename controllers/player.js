const mongoose = require('mongoose')
const CricketPlayer = require('../models/player')

// GET PLAYERS DATA
const getPlayersData = async (req, res) => {
  try {
    //find data
    const result = await CricketPlayer.find()
    res.send(result)
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
}

// GET PERSONAL INFORMATION DATA BY ID
const getPlayersPersonalInformationDataByID = async (req, res) => {
  //id from parameter
  let _id = req.params.id;
  try {
    const result = await CricketPlayer.findOne({ _id })
    if (!result) {
      return res.status(404).send({ message: 'CricketPlayer not found' });
    }
    res.send(result.personalInformation)
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
}

// GET CRICKETDETAILS DATA BY ID
const getPlayersCricketDetailsDataByID = async (req, res) => {
  //id from parameter
  let _id = req.params.id;
  try {
    const result = await CricketPlayer.findOne({ _id })
    if (!result) {
      return res.status(404).send({ message: 'CricketPlayer not found' });
    }
    res.send(result.cricketDetails)
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
}

// GET STATISTICS DATA BY ID
const getPlayersStatisticsDataByID = async (req, res) => {
  //id from parameter
  let _id = req.params.id;
  try {
    const result = await CricketPlayer.findOne({ _id })
    if (!result) {
      return res.status(404).send({ message: 'CricketPlayer not found' });
    }
    res.send(result.statistics)
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
}

// GET BOWLING DATA BY ID
const getPlayersBowlingDataByID = async (req, res) => {
  //id from parameter
  let _id = req.params.id;
  try {
    const result = await CricketPlayer.findOne({ _id })
    if (!result) {
      return res.status(404).send({ message: 'CricketPlayer not found' });
    }
    res.send(result.statistics.bowling)
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
}

// GET BATTING DATA BY ID
const getPlayersBattingDataByID = async (req, res) => {
  //id from parameter
  let _id = req.params.id;
  try {
    const result = await CricketPlayer.findOne({ _id })
    if (!result) {
      return res.status(404).send({ message: 'CricketPlayer not found' });
    }
    res.send(result.statistics.batting)
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
}

// GET MATCHES DATA BY ID
const getPlayersMatchesDataByID = async (req, res) => {
  //id from parameter
  let _id = req.params.id;
  try {
    const result = await CricketPlayer.findOne({ _id })
    if (!result) {
      return res.status(404).send({ message: 'CricketPlayer not found' });
    }
    res.send(result.statistics.matches)
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
}

// GET DATA BY ID
const getPlayersDataByID = async (req, res) => {
  //id from parameter
  let _id = req.params.id;
  try {
    const result = await CricketPlayer.findOne({ _id })
    if (!result) {
      return res.status(404).send({ message: 'CricketPlayer not found' });
    }
    res.send(result)
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
}

// GET FIELDING DATA BY ID
const getPlayersFieldingDataByID = async (req, res) => {
  //id from parameter
  let _id = req.params.id;
  try {
    const result = await CricketPlayer.findOne({ _id })
    if (!result) {
      return res.status(404).send({ message: 'CricketPlayer not found' });
    }
    res.send(result.statistics.fielding)
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
}

// GET DATA BY PHONENUMBER
const getPlayersDataByPhoneNumber = async (req, res) => {
  //id from parameter
  let phoneNumber = req.params.phoneNumber;
  console.log(phoneNumber);
  try {
    const result = await CricketPlayer.findOne({ 'personalInformation.phoneNumber': phoneNumber });
    if (!result) {
      return res.status(404).send({ message: 'CricketPlayer not found' });
    }
    res.send(result)
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
}

//POST DATA
const postPlayersData = async (req, res) => {
  let body = req.body
  console.log(body);
  let doc = new CricketPlayer(body)
  try {
    const result = await doc.save();
    console.log(result);
    res.send({ msg: "Save Document Successfully!" })
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
}

// UPDATE DATA BY ID
const updatePlayersDataByID = async (req, res) => {
  const _id = req.params.id;
  const body = req.body;

  try {
    const result = await CricketPlayer.findOneAndUpdate({ _id }, { $set: body }, { new: true });

    if (!result) {
      return res.status(404).send({ message: 'CricketPlayer not found' });
    }
    res.send({ msg: "Updated Successfully!", updatedPlayer: result });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};


// UPDATE PERSONAL INFORMATION DATA BY ID
const updatePlayersPersonalInformationDataByID = async (req, res) => {
  const _id = req.params.id;
  const body = req.body;

  try {

    // empty object
    let updatedData = {};

    //push body data in object
    for (const field in body) {
      updatedData[`personalInformation.${field}`] = body[field];
    }

    // update data using object
    const result = await CricketPlayer.findOneAndUpdate({ _id }, {$set: updatedData}, { new: true });

    // empty due to other requests data
    updatedData = {}

    if (!result) {
      return res.status(404).send({message : 'CricketPlayer not found'});
    }
    res.send({ msg: "Updated Successfully!", updatedPlayer: result.personalInformation });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

// UPDATE CRICKET DETAILS DATA BY ID
const updatePlayersCricketDetailsDataByID = async (req, res) => {
  const _id = req.params.id;
  const body = req.body;

  try {

    // empty object
    let updatedData = {};

    //push body data in object
    for (const field in body) {
      updatedData[`cricketDetails.${field}`] = body[field];
    }

    // update data using object
    const result = await CricketPlayer.findOneAndUpdate({ _id }, {$set: updatedData}, { new: true });

    // empty due to other requests data
    updatedData = {}

    if (!result) {
      return res.status(404).send({message : 'CricketPlayer not found'});
    }
    res.send({ msg: "Updated Successfully!", updatedPlayer: result.cricketDetails });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};


// UPDATE STATISTICS DATA BY ID
const updatePlayersStatisticsDataByID = async (req, res) => {
  const _id = req.params.id;
  const body = req.body;

  try {

    // empty object
    let updatedData = {};

    //push body data in object
    for (const field in body) {
      updatedData[`statistics.${field}`] = body[field];
    }

    // update data using object
    const result = await CricketPlayer.findOneAndUpdate({ _id }, {$set: updatedData}, { new: true });

    // empty due to other requests data
    updatedData = {}

    if (!result) {
      return res.status(404).send({message : 'CricketPlayer not found'});
    }
    res.send({ msg: "Updated Successfully!", updatedPlayer: result.statistics });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};


// UPDATE MATCHES DATA BY ID
const updatePlayersMatchesDataByID = async (req, res) => {
  const _id = req.params.id;
  const body = req.body;

  try {

    // empty object
    let updatedData = {};

    //push body data in object
    for (const field in body) {
      updatedData[`statistics.matches.${field}`] = body[field];
    }

    // update data using object
    const result = await CricketPlayer.findOneAndUpdate({ _id }, {$set: updatedData}, { new: true });

    // empty due to other requests data
    updatedData = {}

    if (!result) {
      return res.status(404).send({message : 'CricketPlayer not found'});
    }
    res.send({ msg: "Updated Successfully!", updatedPlayer: result.statistics.matches });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};


// UPDATE BOWLING DATA BY ID
const updatePlayersBowlingDataByID = async (req, res) => {
  const _id = req.params.id;
  const body = req.body;

  try {

    // empty object
    let updatedData = {};

    //push body data in object
    for (const field in body) {
      updatedData[`statistics.bowling.${field}`] = body[field];
    }

    // update data using object
    const result = await CricketPlayer.findOneAndUpdate({ _id }, {$set: updatedData}, { new: true });

    // empty due to other requests data
    updatedData = {}

    if (!result) {
      return res.status(404).send({message : 'CricketPlayer not found'});
    }
    res.send({ msg: "Updated Successfully!", updatedPlayer: result.statistics.bowling });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};


// UPDATE BATTING DATA BY ID
const updatePlayersBattingDataByID = async (req, res) => {
  const _id = req.params.id;
  const body = req.body;

  try {

    // empty object
    let updatedData = {};

    //push body data in object
    for (const field in body) {
      updatedData[`statistics.batting.${field}`] = body[field];
    }

    // update data using object
    const result = await CricketPlayer.findOneAndUpdate({ _id }, {$set: updatedData}, { new: true });

    // empty due to other requests data
    updatedData = {}

    if (!result) {
      return res.status(404).send({message : 'CricketPlayer not found'});
    }
    res.send({ msg: "Updated Successfully!", updatedPlayer: result.statistics.batting });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};


// UPDATE FIELDING DATA BY ID
const updatePlayersFieldingDataByID = async (req, res) => {
  const _id = req.params.id;
  const body = req.body;

  try {

    // empty object
    let updatedData = {};

    //push body data in object
    for (const field in body) {
      updatedData[`statistics.fielding.${field}`] = body[field];
    }

    // update data using object
    const result = await CricketPlayer.findOneAndUpdate({ _id }, {$set: updatedData}, { new: true });

    // empty due to other requests data
    updatedData = {}

    if (!result) {
      return res.status(404).send({message : 'CricketPlayer not found'});
    }
    res.send({ msg: "Updated Successfully!", updatedPlayer: result.statistics.fielding });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};


// DELETE DATA BY ID
const deletePlayersDataByID = async (req, res) => {
  const _id = req.params.id
  try {
    const result = await CricketPlayer.findOneAndDelete({ _id })
    if (!result) {
      return res.status(404).send({ message: 'CricketPlayer not found' });
    }
    res.send({ msg: "Deleted Successfully!" })
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
}

module.exports = { updatePlayersCricketDetailsDataByID,getPlayersDataByPhoneNumber, getPlayersData, getPlayersDataByID, postPlayersData, updatePlayersDataByID, deletePlayersDataByID, getPlayersPersonalInformationDataByID, getPlayersCricketDetailsDataByID, getPlayersStatisticsDataByID, getPlayersMatchesDataByID, getPlayersBowlingDataByID, getPlayersBattingDataByID, getPlayersFieldingDataByID, updatePlayersPersonalInformationDataByID,updatePlayersStatisticsDataByID,
updatePlayersMatchesDataByID,
updatePlayersBowlingDataByID,
updatePlayersBattingDataByID,
updatePlayersFieldingDataByID 
};
