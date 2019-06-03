// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
// var mysql = require("mysql"); -- yeah, I wanted to do this, but later.
var bodyParser = require('body-parser');


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, './app/public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);


// Need user data and also saving test data -- I'll go ahead and put the db stuff here for now, but I want to move it eventually.
// =============================================================

// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "",
//     database: "lfg_db"
//   });
  
//   // Initiate MySQL Connection.
//   connection.connect(function(err) {
//     if (err) {
//       console.error("error connecting: " + err.stack);
//       return;
//     }
//     console.log("connected as id " + connection.threadId);
//   });
  
  

  
  // Starts the server to begin listening
  // =============================================================
  app.listen(PORT, function() {
    console.log(`LFG listening on PORT ${PORT}`);
  });

// Export app for testing purposes
module.exports = app;