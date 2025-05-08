const { Router } = require("express");
const { messages, links } = require("../data");

const NewMessageRoute = Router();

NewMessageRoute.get("/", (req, res) => {
  res.render("form");
});

NewMessageRoute.post("/", (req, res) => {
  console.log(req.body);
  messages.push({
    user: req.body.name,
    text: req.body.message,
    added: new Date(),
  });
  res.redirect("/");
});

NewMessageRoute.get("/:user", getMessage);

NewMessageRoute.get("/new/:user", (req, res) =>
  res.redirect(`/new/${req.params.user}`)
);

function getMessage(req, res) {
  const message = messages.find((message) => message.user === req.params.user);

  if (message) {
    res.render("user", { message });
  } else {
    res.status(404).send("Data not found");
  }
}

module.exports = NewMessageRoute;
