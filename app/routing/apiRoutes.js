// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// Basically, the JSON for people and games
// ===============================================================================

var gameData = require("../data/games");
var friendData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/games", function(req, res) {
    res.json(gameData);
  });

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  // API POST Requests
  // 
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // This is where we add a user to the data for friends.
      friendData.push(req.body);
      res.json(true);
    }
  );
}