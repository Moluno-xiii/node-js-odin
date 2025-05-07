const express = require("express");

const app = express();
const port = 8080;
const authorRouter = require("./routes/authorRouter");
const contactRouter = require("./routes/contactRouter");
const messageRouter = require("./routes/messagesRouter");
const AboutRouter = require("./routes/aboutRouter");
const IndexRouter = require("./routes/indexRouter");

// app.get("/", (request, response) => response.send("Hello, world!"));
// app.get("/about", (request, response) => response.send("About us"));
// app.get("/:username/messages/:messageId", (req, res) => {
//   const { username, messageId } = req.params;
//   res.send(`${username} username, messageId : ${messageId}`);
//   console.log(req.params);
//   console.log(req.query);
//   res.end();
// });
app.use("/", IndexRouter);
app.use("/about", AboutRouter);
app.use("/messages", messageRouter);
app.use("/contact", contactRouter);
app.use("/authors", authorRouter);
app.use((request, response) => {
  response.status(404).send("Welcome to the 404 route");
});
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});

app.listen(port, () => {
  console.log(`First express app - listening on port ${port}`);
});
