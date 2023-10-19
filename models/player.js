const mongoose = require('mongoose');
var validator = require("email-validator");

const commonFields = (dataType,isRequired,isUnique) => ({
     type: dataType,
     required: isRequired,
     unique: isUnique,
});

const cricketPlayerSchema = new mongoose.Schema({
  "personalInformation": {
    username: commonFields(String,true,true),
    fullName: commonFields(String,true,true),
    emailAddress: {
      type: String,
      required: true,
      unique: false,
      validate: {
        validator: (value) => {
          return validator.validate(value);
        },
        message: 'Invalid email address',
      },
    },
    dateOfBirth: commonFields(Date,true,false),
    profilePicture: commonFields(String,false,false),
    bio: commonFields(String,true,false),
    phoneNumber: commonFields(String,true,true),
    address: commonFields(String,true,false),
    gender: commonFields(String,true,false),
    town: commonFields(String,true,false),
    city: commonFields(String,true,false),
    country: commonFields(String,true,false)
  },
  "cricketDetails": {
    playingRole:commonFields(String,true,false),
    battingStyle:commonFields(String,true,false),
    bowlingStyle:commonFields(String,true,false),
    cricketTeams: {
     type: [String],
     required: true,
    },
  },
  "statistics": {
    totalInnings: { type: Number, default: 0 ,required : true},
    totalMatches: { type: Number, default: 0 ,required : true},
    matches: {
      wons: { type: Number, default: 0 ,required : true},
      lose: { type: Number, default: 0 ,required : true},
      draws: { type: Number, default: 0 ,required : true},
    },
    batting: {
      innings : { type: Number, default: 0 ,required : true},
      totalRunsScored: { type: Number, default: 0 ,required : true},
      thirties: { type: Number, default: 0 ,required : true},
      fifties: { type: Number, default: 0 ,required : true},
      centuries: { type: Number, default: 0 ,required : true},
      fours: { type: Number, default: 0 ,required : true},
      sixes: { type: Number, default: 0 ,required : true},
      battingAverage: { type: Number, default: 0 ,required : true},
      bestBattingFigures: { type: Number, default: 0 ,required : true},
      strikeRate: { type: Number, default: 0 ,required : true},
      average: { type: Number, default: 0 ,required : true},
      ducks: { type: Number, default: 0 ,required : true},
    },
    bowling: {
      innings : { type: Number, default: 0 ,required : true},
      overs: { type: Number, default: 0 ,required : true},
      wickets: { type: Number, default: 0 ,required : true},
      wides: { type: Number, default: 0 ,required : true},
      noballs: { type: Number, default: 0 ,required : true},
      dotBalls: { type: Number, default: 0 ,required : true},
      runs: { type: Number, default: 0 ,required : true},
      maidenOvers: { type: Number, default: 0 ,required : true},
      average: { type: Number, default: 0 },
      economy: { type: Number, default: 0 ,required : true},
      threeWicketsHauls: { type: Number, default: 0 ,required : true},
      fiveWicketsHauls: { type: Number, default: 0 ,required : true},
      bestFigures: { type: String, default: 0 ,required : true},
    },
    fielding: {
      catches: { type: Number, default: 0 ,required : true},
      runout: { type: Number, default: 0 ,required : true},
      stumping: { type: Number, default: 0 ,required : true},
      assistedRunout: { type: Number, default: 0 ,required : true},
    },
  },
  "achievements": {
    awards: [String],
    trophies: [String]
  },
  "timestamps": {
    updatedAt: {
      type:Date,
      default : Date.now
    }
  },
});

const CricketPlayer = mongoose.model('CricketPlayer', cricketPlayerSchema);

module.exports = CricketPlayer;


