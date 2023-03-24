const express = require("express");
const Notes = require("../models/Note");
const NotesRouter = express.Router();

// home route
NotesRouter.get("/", (req, res) => {
  res.send("This is the Home Page");
});

// notes list
NotesRouter.get("/list", async (req, res) => {
  const notes = await Notes.find();
  res.json(notes);
});

// notes list using userid
NotesRouter.get("/list/:userid", async (req, res) => {
  try {
    const notes = await Notes.find({ userid: req.params.userid });
    if (notes) {
      res.status(200).json(notes);
    } else {
      res.status(404).send("Notes not found");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// add notes
NotesRouter.post("/add", async (req, res) => {
  try {
    const { id, userid, title, content } = req.body;
    const newNote = new Notes({ id, userid, title, content });
    const notes = await newNote.save();
    const response = { message: "New Note Created!  " + "id: " + req.body.id };
    res.json(response);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Delete Notes
NotesRouter.post("/delete", async function (req, res) {
  await Notes.deleteOne({ id: req.body.id });
  const response = { message: "Note Deleted!  " + "id: " + req.body.id };
  res.json(response);
});

module.exports = NotesRouter;
