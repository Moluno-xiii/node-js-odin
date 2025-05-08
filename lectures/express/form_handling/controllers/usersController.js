const usersStorage = require("../storages/usersStorage");
const { body, validationResult } = require("express-validator");

const alphaError = "must only contain letters.";
const lengthError = "must be between 1 and 10 characters.";
const emailError = "please enter a valid email.";
const ageError = "must be a number between 18 and 120.";
const bioError = "Bio must be a maximum of 200 characters.";

const validateUser = [
  body("firstName")
    .trim()
    .isAlpha()
    .withMessage(`First name ${alphaError}`)
    .isLength({ min: 3, max: 10 })
    .withMessage(`First name ${lengthError}`),
  body("lastName")
    .trim()
    .isAlpha()
    .withMessage(`Last name ${alphaError}`)
    .isLength({ min: 3, max: 10 })
    .withMessage(`Last name ${lengthError}`),
  body("email")
    .trim()
    .isEmail()
    .withMessage(`${emailError}`)
    .isLength({ min: 12 })
    .withMessage(`email length must not be less than 12 characters.`),
  body("age")
    .trim()
    .isInt({ min: 18, max: 120 })
    .withMessage(`Age ${ageError}`),
  body("bio").trim().isLength({ max: 200 }).withMessage(bioError),
];

exports.usersListGet = (req, res) => {
  res.render("index", {
    title: "User list",
    users: usersStorage.getUsers(),
  });
};

exports.usersCreateGet = (req, res) => {
  res.render("createUser", {
    title: "Create user",
  });
};

exports.usersCreatePost = [
  validateUser,
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("createUser", {
        title: "Create user",
        errors: errors.array(),
      });
    }
    const { firstName, lastName, email, bio, age } = req.body;
    usersStorage.addUser({ firstName, lastName, email, bio, age });
    res.redirect("/");
  },
];

exports.usersUpdateGet = (req, res) => {
  const user = usersStorage.getUser(req.params.id);
  res.render("updateUser", {
    title: "Update user",
    user,
  });
};

exports.usersUpdatePost = [
  validateUser,
  (req, res) => {
    const user = usersStorage.getUser(req.params.id);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(404).render("updateUser", {
        title: "Update user",
        user,
        errors: errors.array(),
      });
    }
    const { firstName, lastName, email, bio, age } = req.body;
    usersStorage.updateUser(req.params.id, {
      firstName,
      lastName,
      email,
      bio,
      age,
    });
    res.redirect("/");
  },
];

exports.usersDeletePost = (req, res) => {
  console.log(req.params);
  usersStorage.deteUser(req.params.id);
  res.redirect("/");
};
