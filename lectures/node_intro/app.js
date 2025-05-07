const http = require("node:http");
const fs = require("node:fs");
const EventEmitter = require("node:events");

const server = http.createServer();

server.on("request", (request, res) => {
  res.writeHead(200, { "content-type": "application/json" });
  res.end(
    JSON.stringify({
      data: "Hello world!",
    })
  );
});

server.listen(8080);

const content = "File content";
const filepath = __dirname + "/test.txt";

// fs.appendFile(filepath, content + "another content", (err) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log("file written successfully!");
//     console.log(filepath);
//     console.log(__dirname);
//     console.log(__dirname + "/test.txt");
//   }
// });

// fs.readFile(filepath, "utf8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

const eventEmitter = new EventEmitter();
eventEmitter.on("start", () => {
  console.log("started");
});
eventEmitter.on("start", () => {
  console.log("didn't started");
});
eventEmitter.emit("start");
