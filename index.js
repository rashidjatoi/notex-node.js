const express = require("express");
const mongoose = require("./src/config/db");
const { urlencoded } = require("express");
const notesRouter = require("./src/routes/notes_router");

// app initialization
const app = express();

// port
const PORT = process.env.PORT || 5000;


// middleware
app.use(express.json());
app.use(urlencoded({ extended: true }));


// home route
app.get("/", (req, res) => {
  res.send("This is the Home Page");
});


// router
app.use("/notes", notesRouter);



app.listen(PORT, () => {
  console.log(`Server started on PORT:  ${PORT}`);
});
