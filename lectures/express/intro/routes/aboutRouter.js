const Router = require("express");
const AboutRouter = Router();

AboutRouter.get("/", (request, response) =>
  response.send("Welcome to the about route.")
);

module.exports = AboutRouter;
