var db = require("../db/db.json");
var fs = require("fs");

// ROUTING

module.exports = function (app) {
  // API GET Request
  app.get("/api/notes", function (req, res) {
    // Read the db.json file and return all saved notes as JSON
    res.json(db);
  });

  // API POST Request
  app.post("/api/notes", function (req, res) {
    // Receive a new note to save on the request body, add it to the db.json file
    db.push(req.body);
    // Add unique id to each note
    db.forEach((obj, i) => {
      obj.id = i;
    });
    // Return the new note to the client.
    fs.writeFile("./db/db.json", JSON.stringify(db), function () {
      console.log(db);
      res.json(db);
    });
  });

  // // API DELETE Request
  // app.delete("/api/notes/:id", function (req, res) {
  //   // Receive a query parameter containing the id of a note to delete and remove
  //   console.log("delete", req.body);
  //   db.pop(req.body);
  //   res.json(db);
  // });
};
