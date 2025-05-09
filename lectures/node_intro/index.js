const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  let path = ".";
  switch (req.url) {
    case "/":
      path += "/index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "/about.html";
      res.statusCode = 200;
      break;
    case "/contact-me":
      path += "/contact-me.html";
      res.statusCode = 200;
      break;
    default:
      path += "/404.html";
      res.statusCode = 404;
      break;
  }

  res.setHeader("Content-Type", "text/html");
  fs.readFile(path, (err, data) => {
    if (err) {
      res.setHeader("Content-Type", "text/plain");
      res.end("Internal Sever Error");
    } else {
      res.end(data);
    }
  });
});

server.listen(3000);
