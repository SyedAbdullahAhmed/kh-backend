const mongoose = require('mongoose');

const commonFields = (dataType, isRequired) => {
  const defaultVal = dataType === Number ? 0 : '';
  return {
    default: defaultVal,
    type: dataType,
    required: isRequired,
  };
};


const scoreboardSchema = new mongoose.Schema({
     "team1": {
          id: commonFields(String,false),
          teamName: commonFields(String,false),
          totalRuns: commonFields(Number,false),
          totalWicketsLose: commonFields(Number,false),
          totalOvers: commonFields(Number,false),
          extras: commonFields(Number,false),
          "players": [
               {
                    id: commonFields(String,false),
                    playerName: commonFields(String,false),
                    "batting": {
                         runs: commonFields(Number,false),
                         balls: commonFields(Number,false),
                         sixes: commonFields(Number,false),
                         fours: commonFields(Number,false),
                         strikeRate: commonFields(Number,false),
                    },
                    "bowling": {
                         runs: commonFields(Number,false),
                         totalOver: commonFields(Number,false),
                         maidens: commonFields(Number,false),
                         wickets: commonFields(Number,false),
                         economy: commonFields(Number,false),
                    },
                    "fielding": {
                         catches: commonFields(Number,false),
                         runouts: commonFields(Number,false),
                         stumps:commonFields(Number,false),
                    }
               },
               {
                    id: commonFields(String,false),
                    playerName: commonFields(String,false),
                    "batting": {
                         runs: commonFields(Number,false),
                         balls: commonFields(Number,false),
                         sixes: commonFields(Number,false),
                         fours: commonFields(Number,false),
                         strikeRate: commonFields(Number,false),
                    },
                    "bowling": {
                         runs: commonFields(Number,false),
                         totalOver: commonFields(Number,false),
                         maidens: commonFields(Number,false),
                         wickets: commonFields(Number,false),
                         economy: commonFields(Number,false),
                    },
                    "fielding": {
                         catches: commonFields(Number,false),
                         runouts: commonFields(Number,false),
                         stumps:commonFields(Number,false),
                    }
               },
               {
                    id: commonFields(String,false),
                    playerName: commonFields(String,false),
                    "batting": {
                         runs: commonFields(Number,false),
                         balls: commonFields(Number,false),
                         sixes: commonFields(Number,false),
                         fours: commonFields(Number,false),
                         strikeRate: commonFields(Number,false),
                    },
                    "bowling": {
                         runs: commonFields(Number,false),
                         totalOver: commonFields(Number,false),
                         maidens: commonFields(Number,false),
                         wickets: commonFields(Number,false),
                         economy: commonFields(Number,false),
                    },
                    "fielding": {
                         catches: commonFields(Number,false),
                         runouts: commonFields(Number,false),
                         stumps:commonFields(Number,false),
                    }
               },
               {
                    id: commonFields(String,false),
                    playerName: commonFields(String,false),
                    "batting": {
                         runs: commonFields(Number,false),
                         balls: commonFields(Number,false),
                         sixes: commonFields(Number,false),
                         fours: commonFields(Number,false),
                         strikeRate: commonFields(Number,false),
                    },
                    "bowling": {
                         runs: commonFields(Number,false),
                         totalOver: commonFields(Number,false),
                         maidens: commonFields(Number,false),
                         wickets: commonFields(Number,false),
                         economy: commonFields(Number,false),
                    },
                    "fielding": {
                         catches: commonFields(Number,false),
                         runouts: commonFields(Number,false),
                         stumps:commonFields(Number,false),
                    }
               },
               {
                    id: commonFields(String,false),
                    playerName: commonFields(String,false),
                    "batting": {
                         runs: commonFields(Number,false),
                         balls: commonFields(Number,false),
                         sixes: commonFields(Number,false),
                         fours: commonFields(Number,false),
                         strikeRate: commonFields(Number,false),
                    },
                    "bowling": {
                         runs: commonFields(Number,false),
                         totalOver: commonFields(Number,false),
                         maidens: commonFields(Number,false),
                         wickets: commonFields(Number,false),
                         economy: commonFields(Number,false),
                    },
                    "fielding": {
                         catches: commonFields(Number,false),
                         runouts: commonFields(Number,false),
                         stumps:commonFields(Number,false),
                    }
               },
               {
                    id: commonFields(String,false),
                    playerName: commonFields(String,false),
                    "batting": {
                         runs: commonFields(Number,false),
                         balls: commonFields(Number,false),
                         sixes: commonFields(Number,false),
                         fours: commonFields(Number,false),
                         strikeRate: commonFields(Number,false),
                    },
                    "bowling": {
                         runs: commonFields(Number,false),
                         totalOver: commonFields(Number,false),
                         maidens: commonFields(Number,false),
                         wickets: commonFields(Number,false),
                         economy: commonFields(Number,false),
                    },
                    "fielding": {
                         catches: commonFields(Number,false),
                         runouts: commonFields(Number,false),
                         stumps:commonFields(Number,false),
                    }
               },
               {
                    id: commonFields(String,false),
                    playerName: commonFields(String,false),
                    "batting": {
                         runs: commonFields(Number,false),
                         balls: commonFields(Number,false),
                         sixes: commonFields(Number,false),
                         fours: commonFields(Number,false),
                         strikeRate: commonFields(Number,false),
                    },
                    "bowling": {
                         runs: commonFields(Number,false),
                         totalOver: commonFields(Number,false),
                         maidens: commonFields(Number,false),
                         wickets: commonFields(Number,false),
                         economy: commonFields(Number,false),
                    },
                    "fielding": {
                         catches: commonFields(Number,false),
                         runouts: commonFields(Number,false),
                         stumps:commonFields(Number,false),
                    }
               },
               {
                    id: commonFields(String,false),
                    playerName: commonFields(String,false),
                    "batting": {
                         runs: commonFields(Number,false),
                         balls: commonFields(Number,false),
                         sixes: commonFields(Number,false),
                         fours: commonFields(Number,false),
                         strikeRate: commonFields(Number,false),
                    },
                    "bowling": {
                         runs: commonFields(Number,false),
                         totalOver: commonFields(Number,false),
                         maidens: commonFields(Number,false),
                         wickets: commonFields(Number,false),
                         economy: commonFields(Number,false),
                    },
                    "fielding": {
                         catches: commonFields(Number,false),
                         runouts: commonFields(Number,false),
                         stumps:commonFields(Number,false),
                    }
               },
               {
                    id: commonFields(String,false),
                    playerName: commonFields(String,false),
                    "batting": {
                         runs: commonFields(Number,false),
                         balls: commonFields(Number,false),
                         sixes: commonFields(Number,false),
                         fours: commonFields(Number,false),
                         strikeRate: commonFields(Number,false),
                    },
                    "bowling": {
                         runs: commonFields(Number,false),
                         totalOver: commonFields(Number,false),
                         maidens: commonFields(Number,false),
                         wickets: commonFields(Number,false),
                         economy: commonFields(Number,false),
                    },
                    "fielding": {
                         catches: commonFields(Number,false),
                         runouts: commonFields(Number,false),
                         stumps:commonFields(Number,false),
                    }
               },
               {
                    id: commonFields(String,false),
                    playerName: commonFields(String,false),
                    "batting": {
                         runs: commonFields(Number,false),
                         balls: commonFields(Number,false),
                         sixes: commonFields(Number,false),
                         fours: commonFields(Number,false),
                         strikeRate: commonFields(Number,false),
                    },
                    "bowling": {
                         runs: commonFields(Number,false),
                         totalOver: commonFields(Number,false),
                         maidens: commonFields(Number,false),
                         wickets: commonFields(Number,false),
                         economy: commonFields(Number,false),
                    },
                    "fielding": {
                         catches: commonFields(Number,false),
                         runouts: commonFields(Number,false),
                         stumps:commonFields(Number,false),
                    }
               },
               {
                    id: commonFields(String,false),
                    playerName: commonFields(String,false),
                    "batting": {
                         runs: commonFields(Number,false),
                         balls: commonFields(Number,false),
                         sixes: commonFields(Number,false),
                         fours: commonFields(Number,false),
                         strikeRate: commonFields(Number,false),
                    },
                    "bowling": {
                         runs: commonFields(Number,false),
                         totalOver: commonFields(Number,false),
                         maidens: commonFields(Number,false),
                         wickets: commonFields(Number,false),
                         economy: commonFields(Number,false),
                    },
                    "fielding": {
                         catches: commonFields(Number,false),
                         runouts: commonFields(Number,false),
                         stumps:commonFields(Number,false),
                    }
               }
          ]
     },
     team2: {
          id: commonFields(String,false),
          teamName: commonFields(String,false),
          totalRuns: commonFields(Number,false),
          totalWicketsLose: commonFields(Number,false),
          totalOvers: commonFields(Number,false),
          extras: commonFields(Number,false),
          "players": [
               {
                    id: commonFields(String,false),
                    playerName: commonFields(String,false),
                    "batting": {
                         runs: commonFields(Number,false),
                         balls: commonFields(Number,false),
                         sixes: commonFields(Number,false),
                         fours: commonFields(Number,false),
                         strikeRate: commonFields(Number,false),
                    },
                    "bowling": {
                         runs: commonFields(Number,false),
                         totalOver: commonFields(Number,false),
                         maidens: commonFields(Number,false),
                         wickets: commonFields(Number,false),
                         economy: commonFields(Number,false),
                    },
                    "fielding": {
                         catches: commonFields(Number,false),
                         runouts: commonFields(Number,false),
                         stumps:commonFields(Number,false),
                    }
               },
               {
                    id: commonFields(String,false),
                    playerName: commonFields(String,false),
                    "batting": {
                         runs: commonFields(Number,false),
                         balls: commonFields(Number,false),
                         sixes: commonFields(Number,false),
                         fours: commonFields(Number,false),
                         strikeRate: commonFields(Number,false),
                    },
                    "bowling": {
                         runs: commonFields(Number,false),
                         totalOver: commonFields(Number,false),
                         maidens: commonFields(Number,false),
                         wickets: commonFields(Number,false),
                         economy: commonFields(Number,false),
                    },
                    "fielding": {
                         catches: commonFields(Number,false),
                         runouts: commonFields(Number,false),
                         stumps:commonFields(Number,false),
                    }
               },
               {
                    id: commonFields(String,false),
                    playerName: commonFields(String,false),
                    "batting": {
                         runs: commonFields(Number,false),
                         balls: commonFields(Number,false),
                         sixes: commonFields(Number,false),
                         fours: commonFields(Number,false),
                         strikeRate: commonFields(Number,false),
                    },
                    "bowling": {
                         runs: commonFields(Number,false),
                         totalOver: commonFields(Number,false),
                         maidens: commonFields(Number,false),
                         wickets: commonFields(Number,false),
                         economy: commonFields(Number,false),
                    },
                    "fielding": {
                         catches: commonFields(Number,false),
                         runouts: commonFields(Number,false),
                         stumps:commonFields(Number,false),
                    }
               },
               {
                    id: commonFields(String,false),
                    playerName: commonFields(String,false),
                    "batting": {
                         runs: commonFields(Number,false),
                         balls: commonFields(Number,false),
                         sixes: commonFields(Number,false),
                         fours: commonFields(Number,false),
                         strikeRate: commonFields(Number,false),
                    },
                    "bowling": {
                         runs: commonFields(Number,false),
                         totalOver: commonFields(Number,false),
                         maidens: commonFields(Number,false),
                         wickets: commonFields(Number,false),
                         economy: commonFields(Number,false),
                    },
                    "fielding": {
                         catches: commonFields(Number,false),
                         runouts: commonFields(Number,false),
                         stumps:commonFields(Number,false),
                    }
               },
               {
                    id: commonFields(String,false),
                    playerName: commonFields(String,false),
                    "batting": {
                         runs: commonFields(Number,false),
                         balls: commonFields(Number,false),
                         sixes: commonFields(Number,false),
                         fours: commonFields(Number,false),
                         strikeRate: commonFields(Number,false),
                    },
                    "bowling": {
                         runs: commonFields(Number,false),
                         totalOver: commonFields(Number,false),
                         maidens: commonFields(Number,false),
                         wickets: commonFields(Number,false),
                         economy: commonFields(Number,false),
                    },
                    "fielding": {
                         catches: commonFields(Number,false),
                         runouts: commonFields(Number,false),
                         stumps:commonFields(Number,false),
                    }
               },
               {
                    id: commonFields(String,false),
                    playerName: commonFields(String,false),
                    "batting": {
                         runs: commonFields(Number,false),
                         balls: commonFields(Number,false),
                         sixes: commonFields(Number,false),
                         fours: commonFields(Number,false),
                         strikeRate: commonFields(Number,false),
                    },
                    "bowling": {
                         runs: commonFields(Number,false),
                         totalOver: commonFields(Number,false),
                         maidens: commonFields(Number,false),
                         wickets: commonFields(Number,false),
                         economy: commonFields(Number,false),
                    },
                    "fielding": {
                         catches: commonFields(Number,false),
                         runouts: commonFields(Number,false),
                         stumps:commonFields(Number,false),
                    }
               },
               {
                    id: commonFields(String,false),
                    playerName: commonFields(String,false),
                    "batting": {
                         runs: commonFields(Number,false),
                         balls: commonFields(Number,false),
                         sixes: commonFields(Number,false),
                         fours: commonFields(Number,false),
                         strikeRate: commonFields(Number,false),
                    },
                    "bowling": {
                         runs: commonFields(Number,false),
                         totalOver: commonFields(Number,false),
                         maidens: commonFields(Number,false),
                         wickets: commonFields(Number,false),
                         economy: commonFields(Number,false),
                    },
                    "fielding": {
                         catches: commonFields(Number,false),
                         runouts: commonFields(Number,false),
                         stumps:commonFields(Number,false),
                    }
               },
               {
                    id: commonFields(String,false),
                    playerName: commonFields(String,false),
                    "batting": {
                         runs: commonFields(Number,false),
                         balls: commonFields(Number,false),
                         sixes: commonFields(Number,false),
                         fours: commonFields(Number,false),
                         strikeRate: commonFields(Number,false),
                    },
                    "bowling": {
                         runs: commonFields(Number,false),
                         totalOver: commonFields(Number,false),
                         maidens: commonFields(Number,false),
                         wickets: commonFields(Number,false),
                         economy: commonFields(Number,false),
                    },
                    "fielding": {
                         catches: commonFields(Number,false),
                         runouts: commonFields(Number,false),
                         stumps:commonFields(Number,false),
                    }
               },
               {
                    id: commonFields(String,false),
                    playerName: commonFields(String,false),
                    "batting": {
                         runs: commonFields(Number,false),
                         balls: commonFields(Number,false),
                         sixes: commonFields(Number,false),
                         fours: commonFields(Number,false),
                         strikeRate: commonFields(Number,false),
                    },
                    "bowling": {
                         runs: commonFields(Number,false),
                         totalOver: commonFields(Number,false),
                         maidens: commonFields(Number,false),
                         wickets: commonFields(Number,false),
                         economy: commonFields(Number,false),
                    },
                    "fielding": {
                         catches: commonFields(Number,false),
                         runouts: commonFields(Number,false),
                         stumps:commonFields(Number,false),
                    }
               },
               {
                    id: commonFields(String,false),
                    playerName: commonFields(String,false),
                    "batting": {
                         runs: commonFields(Number,false),
                         balls: commonFields(Number,false),
                         sixes: commonFields(Number,false),
                         fours: commonFields(Number,false),
                         strikeRate: commonFields(Number,false),
                    },
                    "bowling": {
                         runs: commonFields(Number,false),
                         totalOver: commonFields(Number,false),
                         maidens: commonFields(Number,false),
                         wickets: commonFields(Number,false),
                         economy: commonFields(Number,false),
                    },
                    "fielding": {
                         catches: commonFields(Number,false),
                         runouts: commonFields(Number,false),
                         stumps:commonFields(Number,false),
                    }
               },
               {
                    id: commonFields(String,false),
                    playerName: commonFields(String,false),
                    "batting": {
                         runs: commonFields(Number,false),
                         balls: commonFields(Number,false),
                         sixes: commonFields(Number,false),
                         fours: commonFields(Number,false),
                         strikeRate: commonFields(Number,false),
                    },
                    "bowling": {
                         runs: commonFields(Number,false),
                         totalOver: commonFields(Number,false),
                         maidens: commonFields(Number,false),
                         wickets: commonFields(Number,false),
                         economy: commonFields(Number,false),
                    },
                    "fielding": {
                         catches: commonFields(Number,false),
                         runouts: commonFields(Number,false),
                         stumps:commonFields(Number,false),
                    }
               }
          ]
     }
});

const Scoreboard = mongoose.model('Scoreboard', scoreboardSchema);

module.exports = Scoreboard;
