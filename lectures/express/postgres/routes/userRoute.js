const { Router } = require("express");
const { createUsernameGet } = require("../controllers/userController");

const userRouter = Router();

userRouter.get("/", createUsernameGet);

module.exports = userRouter;
