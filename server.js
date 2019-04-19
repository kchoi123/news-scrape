// Dependencies
var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");

// Server is using port 8080
var PORT = 8080;

// Creating app variable to store express
var app = express();

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));
// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/newsscrape", { useNewUrlParser: true });

// Routes
require("./routes/routes")(app);

// Start the server
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });