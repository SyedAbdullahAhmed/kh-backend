const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000
app.use(cors())

//connection function
require('./connection/conn')
//convert data to json
app.use(express.json());

//routes
const signup = require('./routes/signup')
const players = require('./routes/player')
const otp = require('./routes/otp')
const teams = require('./routes/teams')
const umpire = require('./routes/umpire')
const match = require('./routes/match')
const creatematch = require('./routes/creatematch')
const scoreboard = require('./routes/scoreboard')
app.use(signup)
app.use(players)
app.use(otp)
app.use(teams)
app.use(umpire)
app.use(match)
app.use(creatematch) 
app.use(scoreboard) 


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}...`)
})

// `
// {
//   "team1": {
//     "id": "team1",
//     "teamName": "Team A",
//      "totalRuns": 0,
//     "totalWicketsLose": 0,
//     "totalOvers": 0,
//     "extras": 0,
//     "players": [
//       {
//         "id": "player1",
//         "playerName": "Player A1",
//         "batting": {
//           "runs": 0,
//           "balls": 0,
//           "sixes": 0,
//           "fours": 0,
//           "strikeRate": 0
//         },
//         "bowling": {
//           "runs": 0,
//           "totalOver": 0,
//           "maidens": 0,
//           "wickets": 0,
//           "economy": 0
//         },
//         "fielding": {
//           "catches": 0,
//           "runouts": 0,
//           "stumps": 0
//         }
//       },
//       {
//         "id": "player2",
//         "playerName": "Player A2",
//         "batting": {
//           "runs": 0,
//           "balls": 0,
//           "sixes": 0,
//           "fours": 0,
//           "strikeRate": 0
//         },
//         "bowling": {
//           "runs": 0,
//           "totalOver": 0,
//           "maidens": 0,
//           "wickets": 0,
//           "economy": 0
//         },
//         "fielding": {
//           "catches": 0,
//           "runouts": 0,
//           "stumps": 0
//         }
//       },
//       {
//         "id": "player3",
//         "playerName": "Player A3",
//         "batting": {
//           "runs": 0,
//           "balls": 0,
//           "sixes": 0,
//           "fours": 0,
//           "strikeRate": 0
//         },
//         "bowling": {
//           "runs": 0,
//           "totalOver": 0,
//           "maidens": 0,
//           "wickets": 0,
//           "economy": 0
//         },
//         "fielding": {
//           "catches": 0,
//           "runouts": 0,
//           "stumps": 0
//         }
//       },
//       {
//         "id": "player4",
//         "playerName": "Player A4",
//         "batting": {
//           "runs": 0,
//           "balls": 0,
//           "sixes": 0,
//           "fours": 0,
//           "strikeRate": 0
//         },
//         "bowling": {
//           "runs": 0,
//           "totalOver": 0,
//           "maidens": 0,
//           "wickets": 0,
//           "economy": 0
//         },
//         "fielding": {
//           "catches": 0,
//           "runouts": 0,
//           "stumps": 0
//         }
//       },
//       {
//         "id": "player5",
//         "playerName": "Player A5",
//         "batting": {
//           "runs": 0,
//           "balls": 0,
//           "sixes": 0,
//           "fours": 0,
//           "strikeRate": 0
//         },
//         "bowling": {
//           "runs": 0,
//           "totalOver": 0,
//           "maidens": 0,
//           "wickets": 0,
//           "economy": 0
//         },
//         "fielding": {
//           "catches": 0,
//           "runouts": 0,
//           "stumps": 0
//         }
//       },
//       {
//         "id": "player6",
//         "playerName": "Player A6",
//         "batting": {
//           "runs": 0,
//           "balls": 0,
//           "sixes": 0,
//           "fours": 0,
//           "strikeRate": 0
//         },
//         "bowling": {
//           "runs": 0,
//           "totalOver": 0,
//           "maidens": 0,
//           "wickets": 0,
//           "economy": 0
//         },
//         "fielding": {
//           "catches": 0,
//           "runouts": 0,
//           "stumps": 0
//         }
//       },
//       {
//         "id": "player7",
//         "playerName": "Player A7",
//         "batting": {
//           "runs": 0,
//           "balls": 0,
//           "sixes": 0,
//           "fours": 0,
//           "strikeRate": 0
//         },
//         "bowling": {
//           "runs": 0,
//           "totalOver": 0,
//           "maidens": 0,
//           "wickets": 0,
//           "economy": 0
//         },
//         "fielding": {
//           "catches": 0,
//           "runouts": 0,
//           "stumps": 0
//         }
//       },
//       {
//         "id": "player8",
//         "playerName": "Player A8",
//         "batting": {
//           "runs": 0,
//           "balls": 0,
//           "sixes": 0,
//           "fours": 0,
//           "strikeRate": 0
//         },
//         "bowling": {
//           "runs": 0,
//           "totalOver": 0,
//           "maidens": 0,
//           "wickets": 0,
//           "economy": 0
//         },
//         "fielding": {
//           "catches": 0,
//           "runouts": 0,
//           "stumps": 0
//         }
//       },
//       {
//         "id": "player9",
//         "playerName": "Player A9",
//         "batting": {
//           "runs": 0,
//           "balls": 0,
//           "sixes": 0,
//           "fours": 0,
//           "strikeRate": 0
//         },
//         "bowling": {
//           "runs": 0,
//           "totalOver": 0,
//           "maidens": 0,
//           "wickets": 0,
//           "economy": 0
//         },
//         "fielding": {
//           "catches": 0,
//           "runouts": 0,
//           "stumps": 0
//         }
//       },
//       {
//         "id": "player10",
//         "playerName": "Player A10",
//         "batting": {
//           "runs": 0,
//           "balls": 0,
//           "sixes": 0,
//           "fours": 0,
//           "strikeRate": 0
//         },
//         "bowling": {
//           "runs": 0,
//           "totalOver": 0,
//           "maidens": 0,
//           "wickets": 0,
//           "economy": 0
//         },
//         "fielding": {
//           "catches": 0,
//           "runouts": 0,
//           "stumps": 0
//         }
//       },
//       {
//         "id": "player11",
//         "playerName": "Player A11",
//         "batting": {
//           "runs": 0,
//           "balls": 0,
//           "sixes": 0,
//           "fours": 0,
//           "strikeRate": 0
//         },
//         "bowling": {
//           "runs": 0,
//           "totalOver": 0,
//           "maidens": 0,
//           "wickets": 0,
//           "economy": 0
//         },
//         "fielding": {
//           "catches": 0,
//           "runouts": 0,
//           "stumps": 0
//         }
//       }
//     ]
//   },
//   "team2": {
//     "id": "team2",
//     "teamName": "Team B",
//      "totalRuns": 0,
//     "totalWicketsLose": 0,
//     "totalOvers": 0,
//     "extras": 0,
//     "players": [
//       {
//         "id": "player1",
//         "playerName": "Player B1",
//         "batting": {
//           "runs": 0,
//           "balls": 0,
//           "sixes": 0,
//           "fours": 0,
//           "strikeRate": 0
//         },
//         "bowling": {
//           "runs": 0,
//           "totalOver": 0,
//           "maidens": 0,
//           "wickets": 0,
//           "economy": 0
//         },
//         "fielding": {
//           "catches": 0,
//           "runouts": 0,
//           "stumps": 0
//         }
//       },
//       {
//         "id": "player2",
//         "playerName": "Player B2",
//         "batting": {
//           "runs": 0,
//           "balls": 0,
//           "sixes": 0,
//           "fours": 0,
//           "strikeRate": 0
//         },
//         "bowling": {
//           "runs": 0,
//           "totalOver": 0,
//           "maidens": 0,
//           "wickets": 0,
//           "economy": 0
//         },
//         "fielding": {
//           "catches": 0,
//           "runouts": 0,
//           "stumps": 0
//         }
//       },
//       {
//         "id": "player3",
//         "playerName": "Player B3",
//         "batting": {
//           "runs": 0,
//           "balls": 0,
//           "sixes": 0,
//           "fours": 0,
//           "strikeRate": 0
//         },
//         "bowling": {
//           "runs": 0,
//           "totalOver": 0,
//           "maidens": 0,
//           "wickets": 0,
//           "economy": 0
//         },
//         "fielding": {
//           "catches": 0,
//           "runouts": 0,
//           "stumps": 0
//         }
//       },
//       {
//         "id": "player4",
//         "playerName": "Player B4",
//         "batting": {
//           "runs": 0,
//           "balls": 0,
//           "sixes": 0,
//           "fours": 0,
//           "strikeRate": 0
//         },
//         "bowling": {
//           "runs": 0,
//           "totalOver": 0,
//           "maidens": 0,
//           "wickets": 0,
//           "economy": 0
//         },
//         "fielding": {
//           "catches": 0,
//           "runouts": 0,
//           "stumps": 0
//         }
//       },
//       {
//         "id": "player5",
//         "playerName": "Player B5",
//         "batting": {
//           "runs": 0,
//           "balls": 0,
//           "sixes": 0,
//           "fours": 0,
//           "strikeRate": 0
//         },
//         "bowling": {
//           "runs": 0,
//           "totalOver": 0,
//           "maidens": 0,
//           "wickets": 0,
//           "economy": 0
//         },
//         "fielding": {
//           "catches": 0,
//           "runouts": 0,
//           "stumps": 0
//         }
//       },
//       {
//         "id": "player6",
//         "playerName": "Player B6",
//         "batting": {
//           "runs": 0,
//           "balls": 0,
//           "sixes": 0,
//           "fours": 0,
//           "strikeRate": 0
//         },
//         "bowling": {
//           "runs": 0,
//           "totalOver": 0,
//           "maidens": 0,
//           "wickets": 0,
//           "economy": 0
//         },
//         "fielding": {
//           "catches": 0,
//           "runouts": 0,
//           "stumps": 0
//         }
//       },
//       {
//         "id": "player7",
//         "playerName": "Player B7",
//         "batting": {
//           "runs": 0,
//           "balls": 0,
//           "sixes": 0,
//           "fours": 0,
//           "strikeRate": 0
//         },
//         "bowling": {
//           "runs": 0,
//           "totalOver": 0,
//           "maidens": 0,
//           "wickets": 0,
//           "economy": 0
//         },
//         "fielding": {
//           "catches": 0,
//           "runouts": 0,
//           "stumps": 0
//         }
//       },
//       {
//         "id": "player8",
//         "playerName": "Player B8",
//         "batting": {
//           "runs": 0,
//           "balls": 0,
//           "sixes": 0,
//           "fours": 0,
//           "strikeRate": 0
//         },
//         "bowling": {
//           "runs": 0,
//           "totalOver": 0,
//           "maidens": 0,
//           "wickets": 0,
//           "economy": 0
//         },
//         "fielding": {
//           "catches": 0,
//           "runouts": 0,
//           "stumps": 0
//         }
//       },
//       {
//  	 "id": "player9",
//  	 "playerName": "Player B9",
//  	 "batting": {
//           "runs": 0,
//           "balls": 0,
//           "sixes": 0,
//           "fours": 0,
//           "strikeRate": 0
//         },
//         "bowling": {
//           "runs": 0,
//           "totalOver": 0,
//           "maidens": 0,
//           "wickets": 0,
//           "economy": 0
//         },
//         "fielding": {
//           "catches": 0,
//           "runouts": 0,
//           "stumps": 0
//         }// }
// ,
// 	 {
//         "id": "player10",
//         "playerName": "Player B10",
//         "batting": {
//           "runs": 0,
//           "balls": 0,
//           "sixes": 0,
//           "fours": 0,
//           "strikeRate": 0
//         },
//         "bowling": {
//           "runs": 0,
//           "totalOver": 0,
//           "maidens": 0,
//           "wickets": 0,
//           "economy": 0
//         },
//         "fielding": {
//           "catches": 0,
//           "runouts": 0,
//           "stumps": 0
//         }
//       },
//       {
//         "id": "player11",
//         "playerName": "Player B11",
//         "batting": {
//           "runs": 0,
//           "balls": 0,
//           "sixes": 0,
//           "fours": 0,
//           "strikeRate": 0
//         },
//         "bowling": {
//           "runs": 0,
//           "totalOver": 0,
//           "maidens": 0,
//           "wickets": 0,
//           "economy": 0
//         },
//         "fielding": {
//           "catches": 0,
//           "runouts": 0,
//           "stumps": 0
//         }
//       }
//     ]
//   }
// }

// `