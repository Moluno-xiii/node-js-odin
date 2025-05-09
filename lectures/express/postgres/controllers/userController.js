const db = require("../db/queries");

async function getUsernames(req, res) {
  const usernames = await db.getAllUsernames();
  res.send("Usernames : " + usernames.map((user) => user.usernames).join(", "));
}

async function createUsernameGet(req, res) {
  res.render("getUsername", { title: "Get username form" });
}

async function createUsernamePost(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
}

module.exports = {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
};
