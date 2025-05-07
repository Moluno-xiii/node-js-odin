const Router = require("express");

const contactRouter = Router();
contactRouter.get("/", (request, response) =>
  response.send("this is the contact page")
);

module.exports = contactRouter;
