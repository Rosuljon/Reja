const http = require("http");
const app = require("./app");
const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(
    `Server running at http://localhost:${PORT}, http://localhost:${PORT}`
  );
});
