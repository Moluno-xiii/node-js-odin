const { Router } = require("express");
const { deleteAllUsers } = require("../db/queries");

const DeleteUsersRouter = Router();

DeleteUsersRouter.get("/", (req, res) => {
  res.render("deleteUsers");
});

DeleteUsersRouter.get("/users", async (req, res) => {
  const data = await deleteAllUsers();
  res.redirect("/");
});

module.exports = DeleteUsersRouter;
