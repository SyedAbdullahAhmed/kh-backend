const mongoose = require('mongoose');

const commonFields = (dataType, isRequired, isUnique) => ({
     type: dataType,
     required: isRequired,
     unique: isUnique,
});

const cricketTeamSchema = new mongoose.Schema({
     "teamInformation": {
          name: commonFields(String, true, true),
          abbreviation: commonFields(String, true, true),
          logo: commonFields(String, true, true),
          captain: commonFields(String, true, false),
          description: commonFields(String, true, false),
          Achievements: [String],
          players: [mongoose.Schema.Types.Mixed]
     },
     "Team Statistics": {
          totalMatchesPlayed: { type: Number, default: 0, required: true },
          totalWins: { type: Number, default: 0, required: true },
          totalLosses: { type: Number, default: 0, required: true },
          totalDraws: { type: Number, default: 0, required: true },
          winningPercentage: { type: Number, default: 0, required: true },
          mostRunsScored: { type: Number, default: 0, required: true },
          mostWicketsTaken: { type: Number, default: 0, required: true },
          highestTeamScore: { type: Number, default: 0, required: true },
          lowestTeamScore: { type: Number, default: 0, required: true }
     }

});

const CricketTeam = mongoose.model('CricketTeam', cricketTeamSchema);

module.exports = CricketTeam;


