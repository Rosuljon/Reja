console.log("Starting");
const express = require("express");
const app = express();
const fs = require("fs");

//Mongodbni chaqirish
const db = require("./server").db();
const mongodb = require("mongodb");

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
app.get("/", function (req, res) {
  console.log("user entered /");

  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("Something went wrong");
      } else {
        res.render("reja", { items: data });
      }
    });
});
app.post("/create-item", (req, res) => {
  console.log("user entered /create-item");
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    if (err) {
      console.log(err);
      res.json({ state: "failed" });
      return;
    }
    res.json(data.ops[0]);
  });
});
app.post("/delete-item", (req, res) => {
  console.log("user entered /delete-item");
  const id = req.body.id;
  db.collection("plans").deleteOne(
    { _id: new mongodb.ObjectId(id) },
    (err, data) => {
      if (err) {
        console.log(err);
        res.json({ state: "failed" });
        return;
      }
      res.json({ state: "success" });
    }
  );
});
app.post("/edit-item", (req, res) => {
  console.log("user entered /edit-item");
  const data = req.body;
  db.collection("plans").findOneAndUpdate(
    { _id: new mongodb.ObjectId(data.id) },
    { $set: { reja: data.new_input } },
    (err, data) => {
      res.json({ state: "success" });
    }
  );
});
app.post("/delete-all", (req, res) => {
  console.log("user entered /delete-all");

  if (req.body.delete_all) {
    db.collection("plans").deleteMany(() => {
      res.json({ state: "all plans deleted" });
    });
  }
});
app.get("/author", function (req, res) {
  res.render("author", { user: user });
});

module.exports = app;
