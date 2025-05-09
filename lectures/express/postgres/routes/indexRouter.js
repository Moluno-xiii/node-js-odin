const { Router } = require("express");
const { getAllUsernames } = require("../db/queries");

const IndexRouter = Router();

IndexRouter.get("/", async (req, res) => {
  const rows = await getAllUsernames();
  res.render("index", { users: rows, title: "All users data", query: "users" });
});

module.exports = IndexRouter;
