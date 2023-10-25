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
app.use(signup)
app.use(players)
app.use(otp)
app.use(teams)
app.use(umpire)
app.use(match)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}...`)
})

// `{
//   "team1": "Team A",
//   "team2": "Team B",
//   "date": "2023-10-20",
//   "venue": "Stadium XYZ",
//   "result": "Team A won by 50 runs",
//   "playerOfTheMatch": "Player X",
//   "innings": [
//     {
//       "team": "Team A",
//       "score": {
//         "overs": 50,
//         "wickets": 5,
//         "total": 300
//       },
//       "players": [
//         {
//           "name": "Player A",
//           "runs": 100,
//           "balls": 89,
//           "strikeRate": 90,
//           "sixes": 5,
//           "fours": 8,
//           "1s": 22,
//           "2s": 28,
//           "3s": 8
//         }
//       ]
//     }
//     {
//       "team": "Team B",
//       "score": {
//         "overs": 50,
//         "wickets": 5,
//         "total": 300
//       },
//       "players": [
//         {
//           "name": "Player A",
//           "runs": 100,
//           "balls": 89,
//           "strikeRate": 90,
//           "sixes": 5,
//           "fours": 8,
//           "1s": 22,
//           "2s": 28,
//           "3s": 8
//         }
//       ]
//     }
//   ]
// }`