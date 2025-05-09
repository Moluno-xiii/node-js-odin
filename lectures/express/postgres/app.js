require("dotenv").config();
const express = require("express");
const path = require("node:path");
const userRouter = require("./routes/userRoute");
const searchRouter = require("./routes/searchRouter");
const DeleteUsersRouter = require("./routes/deleteUsersRouter");
const IndexRouter = require("./routes/indexRouter");

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
const port = process.env.PORT;

app.get("/", IndexRouter);
app.use("/user", userRouter);
app.use("/search", searchRouter);
app.use("/delete", DeleteUsersRouter);

app.use((req, res) => res.status(404).send("Page not found!"));

app.listen(port, () => console.log(`___Server running 0n port ${port}___`));
