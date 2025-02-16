console.log("Starting");

const express = require("express");
const app = express();
const http = require("http");
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
  res.end("Welcome to the server");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`Server running at http://localhost:${PORT}`);
});
