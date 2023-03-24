const mongoose = require("mongoose");
const notes = require('../models/Note');

mongo_url = "mongodb+srv://rashid:rashid@cluster0.hyfjikr.mongodb.net/notesdbb";

mongoose
  .connect(mongo_url, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to the Database");
  })
  .catch((error) => {
    console.log(`Error: ${error}`);
  });
