// Routes
// =============================================================

// switch statement to make this all kinds of simple.


app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/results.html"));
  });