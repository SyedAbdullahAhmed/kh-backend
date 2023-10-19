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
app.use(signup)
app.use(players)
app.use(otp)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}...`)
})

