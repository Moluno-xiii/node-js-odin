const usersStorage = require("../storages/usersStorage");

const testUsers = [
  {
    firstName: "boolean",
    lastName: "string",
    age: 22,
    bio: "this is not a bio",
    id: 12,
    email: "boolean@gmail.com",
  },
  {
    firstName: "boolean",
    lastName: "string",
    age: 22,
    bio: "this is not a bio",
    id: 12,
    email: "boolean@gmail.com",
  },
];

exports.searchControllerGet = (req, res) => {
  const { email } = req.query;
  const users = usersStorage.getUserByEmail(email);
  res.render("search", {
    users,
    title: "User search results",
    email,
  });
};
