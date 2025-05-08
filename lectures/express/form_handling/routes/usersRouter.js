const { Router } = require("express");
const {
  usersCreateGet,
  usersListGet,
  usersCreatePost,
  usersUpdateGet,
  usersUpdatePost,
  usersDeletePost,
} = require("../controllers/usersController");

const UsersRouter = Router();

UsersRouter.get("/", usersListGet);
UsersRouter.get("/create", usersCreateGet);
UsersRouter.post("/create", usersCreatePost);
UsersRouter.get("/:id/update", usersUpdateGet);
UsersRouter.post("/:id/update", usersUpdatePost);
UsersRouter.post("/:id/delete", usersDeletePost);
UsersRouter.get("/:id/delete", (req, res) =>
  res.send(`${req.params.id} deletion page`)
);

module.exports = UsersRouter;
