// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Need user data and also saving test data
// =============================================================



// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
  
  app.get("/results", function(req, res) {
    res.sendFile(path.join(__dirname, "results.html"));
  });
  


  
  // Create New Users
  app.post("/results", function(req, res) {
      //the point of this will be to create the new user and save their test info to the database
    
  });
  
  // Starts the server to begin listening
  // =============================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

// Export app for testing purposes
module.exports = app;