const Router = require("express");
const IndexRouter = Router();

IndexRouter.get("/", (request, response) =>
  response.send("Welcome to the index route.")
);

module.exports = IndexRouter;
