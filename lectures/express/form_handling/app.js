const express = require("express");
const path = require("node:path");

const UsersRouter = require("./routes/usersRouter");
const SearchRouter = require("./routes/searchRoute");

const app = express();
const port = 5000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));
app.use(express.urlencoded({ extended: true }));

app.use("/", UsersRouter);
app.use("/search", SearchRouter);

app.use((req, res) => res.status(404).send("Page not found"));

app.listen(port, () => console.log(`Listening on port ${port}`));
