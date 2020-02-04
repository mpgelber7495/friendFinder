const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// let __dirname = path.dirname("/app/public");

app.get("/", function(req, res) {
  res.status(200).sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey", function(req, res) {
  res.status(200).sendFile(path.join(__dirname, "app/public/survey.html"));
});

app.get("/api/friends", function(req, res) {
  //   fs.readFileSync("app/data/friends.json");
  res.sendFile(path.join(__dirname, "app/data/friends.json"));
});

app.post("/api/friends", function(req, res) {
  let friendObject = {};
  friendObject.name = req.body.name;
  friendObject.photo = req.body.photo;
  friendObject.scores = req.body.scores;
  let friendsArray = JSON.parse(
    fs.readFileSync("app/data/friends.json", "utf8")
  );
  friendsArray.push(friendObject);
  fs.writeFileSync("app/data/friends.json", JSON.stringify(friendsArray));
  res.send("Friend added!");
});

app.listen(3000);
