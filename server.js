const http = require("http");
const mongodb = require("mongodb");

const connectString =
  "mongodb+srv://ronnydev:prestigious97@cluster0.uuaqw.mongodb.net/Reja?authSource";
mongodb.connect(connectString, {}, (err, client) => {
  if (err) console.error("Error on connection MongoDB");
  else {
    console.log("MongoDB successfully connected");
    module.exports = client;

    const app = require("./app");
    const server = http.createServer(app);
    let PORT = 3000;
    server.listen(PORT, function () {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  }
});
