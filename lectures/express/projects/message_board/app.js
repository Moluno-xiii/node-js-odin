const express = require("express");
const path = require("node:path");
const { messages, links } = require("./data");
const NewMessageRoute = require("./routes/new");
const port = 8080;

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index", { messages, links, title: "Message Board" });
});
app.use("/new", NewMessageRoute);
app.use((req, res) => res.status(404).send("Page not found"));

app.listen(port, () => console.log(`Listening on port ${port}`));
