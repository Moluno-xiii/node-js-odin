const Router = require("express");

const messageRouter = Router();

messageRouter.get("/", (request, response) =>
  response.send("This is the message router page")
);
messageRouter.get("/:messageId", (request, response) => {
  const { messageId } = request.params;
  response.send({ messageId });
  console.log(request.params);
  console.log(request.query);
});

module.exports = messageRouter;
