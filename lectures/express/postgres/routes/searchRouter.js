const { Router } = require("express");
const { getUsername } = require("../db/queries");

const searchRouter = Router();

searchRouter.get("/", async (req, res) => {
  const { username } = req.query;
  const data = await getUsername(username);
  res.render("search", {
    title: `Search result for ${username}`,
    users: data,
    query: username,
  });
});

module.exports = searchRouter;
