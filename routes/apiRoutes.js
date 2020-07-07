// LOAD DATA
// Linking our routes to "data" sources.
// These data sources hold arrays of information on notes

var noteData = require("../db/noteData");

// ROUTING

module.exports = function (app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link

  app.get("/api/notes", function (req, res) {
    // Should read the db.json file and return all saved notes as JSON.
    db.json(noteData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array

  app.post("/api/notes", function (req, res) {
    // Should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.
    noteData.push(req.body);
    db.json(true);
  });

  app.delete("/api/notes/:id", function (req, res) {
    // Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.
  });
};
