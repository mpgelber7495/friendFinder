const express = require("express");
const path = require("path");

const app = express();
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// let __dirname = path.dirname("/app/public");

app.get("/", function(req, res) {
  res.status(201).sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey", function(req, res) {
  res.status(201).sendFile(path.join(__dirname, "app/public/survey.html"));
});
app.listen(3000);
