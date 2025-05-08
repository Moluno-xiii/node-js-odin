const express = require("express");
const path = require("node:path");

const app = express();
const port = 8080;
const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];
const users = ["Rose", "Cake", "Biff"];

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { message: "This is trippy!", links, users });
});
app.get("/about", (req, res) => {
  res.render("about", { message: "Welcome to the about page" });
});
app.use((req, res) => {
  res.status(404).send("Page not found!");
});

app.listen(port, () => {
  console.log("Listening for requests...");
});
