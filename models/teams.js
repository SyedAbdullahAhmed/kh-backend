const mongoose = require('mongoose');

const commonStringFields = (dataType, isRequired, isUnique) => ({
     type: dataType,
     required: isRequired,
     unique: isUnique,
});
const commonNumberFields = (dataType, isRequired) => ({
     type: dataType,
     required: isRequired,
     default: 0
});

const cricketTeamSchema = new mongoose.Schema({
     "teamInformation": {
          name: commonStringFields(String, true, true),
          abbreviation: commonStringFields(String, true, true),
          logo: commonStringFields(String, true, true),
          captain: commonStringFields(String, true, false),
          description: commonStringFields(String, true, false),
          achievements: [String],
          players: [mongoose.Schema.Types.Mixed]
     },
     "teamStatistics": {
          totalMatchesPlayed: commonNumberFields(Number, false),
          totalWins: commonNumberFields(Number, false),
          totalLosses: commonNumberFields(Number, false),
          totalDraws: commonNumberFields(Number, false),
          winningPercentage: commonNumberFields(Number, false),
          mostRunsScored: commonNumberFields(Number, false),
          mostWicketsTaken: commonNumberFields(Number, false),
          highestTeamScore: commonNumberFields(Number, false),
          lowestTeamScore: commonNumberFields(Number, false)
     },
     "matchHistory" : [mongoose.Schema.Types.Mixed]

});

const CricketTeam = mongoose.model('CricketTeam', cricketTeamSchema);

module.exports = CricketTeam;


