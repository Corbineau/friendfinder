var path = require("path");



// ===============================================================================
// ROUTING
// ===============================================================================
//may want to make this a switch statement.

module.exports = function(app) {

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/results.html"));
  });

}