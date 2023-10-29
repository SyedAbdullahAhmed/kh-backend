const mongoose = require('mongoose');

const commonStringFields = (isRequired, isUnique) => ({
  type: String,
  required: isRequired,
  unique: isUnique
});

const commonNumberFields = (isRequired) => ({
  type: Number,
  required: isRequired,
  default: 0,
});

const matchSchema = new mongoose.Schema({
  date: commonStringFields(true, false),
  time: commonStringFields(true, false),
  venue: commonStringFields(true, false),
  matchStatus: {type : String, default : 'Scheduled', required : true},
  scoreboardID: commonStringFields(false, false),
  umpires: [String],
  teams: [
    {
      teamID: commonStringFields(true, false),
      teamName: commonStringFields(true, false),
      isWin: {type : String, default : '',required : false ,unique : false},
      totalRuns: commonNumberFields(true),
      totalOversPlayed: commonNumberFields(true),
      totalWicketsLose: commonNumberFields(true),
    },
    {
      teamID: commonStringFields(true, false),
      teamName: commonStringFields(true, false),
      isWin: {type : String,default : '',required : false ,unique : false},
      totalRuns: commonNumberFields(true),
      totalOversPlayed: commonNumberFields(true),
      totalWicketsLose: commonNumberFields(true),
    },
  ],
});

const Match = mongoose.model('CreateMatch', matchSchema);

module.exports = Match;
