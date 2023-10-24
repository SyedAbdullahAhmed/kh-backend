const mongoose = require('mongoose');
var validator = require("email-validator");

const commonFields = (dataType,isRequired,isUnique) => ({
     type: dataType,
     required: isRequired,
     unique: isUnique,
});

const cricketPlayerSchema = new mongoose.Schema({
  "personalInformation": {
    fullName: commonFields(String,true,false),
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
    bio: commonFields(String,false,false),
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (value) {
          return value.length === 11;
        },
        message: 'Phone number must be a 11-digit number without spaces or special characters.'
      }
    },
    address: commonFields(String,false,false),
    gender: commonFields(String,true,false),
    town: commonFields(String,true,false),
    city: commonFields(String,false,false),
    country: commonFields(String,false,false)
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
    totalInnings: { type: Number, default: 0 ,required : false},
    totalMatches: { type: Number, default: 0 ,required : false},
    matches: {
      wons: { type: Number, default: 0 ,required : false},
      lose: { type: Number, default: 0 ,required : false},
      draws: { type: Number, default: 0 ,required : false},
    },
    batting: {
      innings : { type: Number, default: 0 ,required : false},
      totalRunsScored: { type: Number, default: 0 ,required : false},
      thirties: { type: Number, default: 0 ,required : false},
      fifties: { type: Number, default: 0 ,required : false},
      centuries: { type: Number, default: 0 ,required : false},
      fours: { type: Number, default: 0 ,required : false},
      sixes: { type: Number, default: 0 ,required : false},
      battingAverage: { type: Number, default: 0 ,required : false},
      bestBattingFigures: { type: Number, default: 0 ,required : false},
      strikeRate: { type: Number, default: 0 ,required : false},
      average: { type: Number, default: 0 ,required : false},
      ducks: { type: Number, default: 0 ,required : false},
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
      catches: { type: Number, default: 0 ,required : false},
      runout: { type: Number, default: 0 ,required : false},
      stumping: { type: Number, default: 0 ,required : false},
      assistedRunout: { type: Number, default: 0 ,required : false},
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
