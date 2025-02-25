console.log("Starting");

const express = require("express");
const app = express();
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  user = JSON.parse(data);
});
// 1: Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session code

// 3: views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routing code
app.post("/create-item", (req, res) => {
  console.log(req.body);
  res.json({ test: "success" });
});
app.get("/author", function (req, res) {
  res.render("author", { user: user });
});
app.get("/", function (req, res) {
  res.render("reja");
});

module.exports = app;
