const mongoose = require("mongoose");

try {
  mongoose.connect('mongodb+srv://mongodb:eGACCcmGvqD09XIx@cluster0.1yqzrrw.mongodb.net/test?retryWrites=true&w=majority')
  console.log("connected");
} catch (error) {
  console.log("could not connect");
}



