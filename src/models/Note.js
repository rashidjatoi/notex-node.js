const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var NotesSchema = new Schema({
  id: {
    type: String,
    unique: true,
    required: true,
  },
  userid: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  dateAdded: {
    type: Date,
    default: Date.now(),
  },
});

// Compile model from schema
var NotesModel = mongoose.model("NotesModel", NotesSchema);
module.exports = NotesModel;
