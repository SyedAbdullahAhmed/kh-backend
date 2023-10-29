const mongoose = require('mongoose');
var validator = require("email-validator");

const commonStringFields = (dataType, isRequired, isUnique) => ({
  type: dataType,
  required: isRequired,
  unique: isUnique,
  default: ""
});
const commonNumberFields = (dataType, isRequired, isUnique) => ({
  type: dataType,
  required: isRequired,
  default: 0
});




const cricketPlayerSchema = new mongoose.Schema({
  "personalInformation": {
    fullName: commonStringFields(String, true, false),
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
    dateOfBirth: commonStringFields(Date, true, false),
    profilePicture: commonStringFields(String, false, false),
    bio: commonStringFields(String, false, false),
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
    address: commonStringFields(String, false, false),
    gender: commonStringFields(String, true, false),
    town: commonStringFields(String, true, false),
    city: commonStringFields(String, false, false),
    country: commonStringFields(String, false, false)
  },
  "cricketDetails": {
    playingRole: commonStringFields(String, true, false),
    battingStyle: commonStringFields(String, true, false),
    bowlingStyle: commonStringFields(String, true, false),
    cricketTeams: {
      type: [String],
      required: false,
    },
  },
  "statistics": {
    totalInnings: commonNumberFields(Number, false),
    totalInnings: commonNumberFields(Number, false),
    totalMatches: commonNumberFields(Number, false),
    matches: {
      wons: commonNumberFields(Number, false),
      lose: commonNumberFields(Number, false),
      draws: commonNumberFields(Number, false),
    },
    batting: {
      innings: commonNumberFields(Number, false),
      totalRunsScored: commonNumberFields(Number, false),
      thirties: commonNumberFields(Number, false),
      fifties: commonNumberFields(Number, false),
      centuries: commonNumberFields(Number, false),
      fours: commonNumberFields(Number, false),
      sixes: commonNumberFields(Number, false),
      bestBattingFigures: commonNumberFields(Number, false),
      strikeRate: commonNumberFields(Number, false),
      average: commonNumberFields(Number, false),
      ducks: commonNumberFields(Number, false),
    },
    bowling: {
      innings: commonNumberFields(Number, false),
      overs: commonNumberFields(Number, false),
      wickets: commonNumberFields(Number, false),
      wides: commonNumberFields(Number, false),
      noballs: commonNumberFields(Number, false),
      dotBalls: commonNumberFields(Number, false),
      runs: commonNumberFields(Number, false),
      maidenOvers: commonNumberFields(Number, false),
      average: commonNumberFields(Number, false),
      economy: commonNumberFields(Number, false),
      threeWicketsHauls: commonNumberFields(Number, false),
      fiveWicketsHauls: commonNumberFields(Number, false),
      bestFigures: { type: String, default: "", required: false },
    },
    fielding: {
      catches: commonNumberFields(Number, false),
      runout: commonNumberFields(Number, false),
      stumping: commonNumberFields(Number, false),
    },
  },
  "achievements": {
    awards: [String],
    trophies: [String]
  },
  "timestamps": {
    updatedAt: {
      type: Date,
      default: Date.now
    }
  },
});

const CricketPlayer = mongoose.model('CricketPlayer', cricketPlayerSchema);

module.exports = CricketPlayer;
