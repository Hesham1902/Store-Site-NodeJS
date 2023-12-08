const { check, body } = require("express-validator");
const User = require("../models/user");
const bcrypt = require("bcryptjs");

let productValidation = [
  body("title")
    .isString()
    .isLength({ min: 3 })
    .trim()
    .withMessage("Title must be at least 3 chars and max 50 chars"),
  body("price").isFloat().trim().withMessage("Price can be positve value only"),
  body("description")
    .isLength({ min: 5, max: 400 })
    .trim()
    .withMessage(
      "Please enter a valid Product desctription, maxium 100 characters long."
    ),
];

let loginValidation = [
  body("email")
    .isEmail()
    .withMessage("Please enter a valid email")
    .custom((value, { req }) => {
      return User.findOne({ email: value }).then((user) => {
        if (!user) {
          return Promise.reject("E-mail not exist");
        }
        req.user = user;
        return;
      });
    }),
  body("password", "Not A Valid Password")
    .isLength({ min: 4 })
    .isAlphanumeric()
    .custom((value, { req }) => {
      return bcrypt.compare(value, req.user.password).then((doMatch) => {
        if (!doMatch) {
          return Promise.reject("Password is incorrect");
        }
      });
    }),
];

let signupValidation = [
  check("email")
    .isEmail()
    .withMessage("Please enter a valid email")
    .custom((value, { req }) => {
      return User.findOne({ email: value }).then((user) => {
        if (user) {
          return Promise.reject(
            "E-mail Exists Already, please pick another one."
          );
        }
      });
    }),
  body("password")
    .exists({ checkFalsy: true })
    .withMessage("You must type a password")
    .isLength({ min: 4 })
    .withMessage("The password must be at least 4 chars long"),
  body("confirmPassword")
    .exists({ checkFalsy: true })
    .withMessage("You must type a confirmation password")
    .custom((value, { req }) => value === req.body.password)
    .withMessage("The passwords do not match"),
];

let resetPasswordValidation = [
  body("password")
    .exists({ checkFalsy: true })
    .withMessage("You must type a password")
    .isLength({ min: 4 })
    .withMessage("The password must be at least 4 chars long"),
  body("confirmPassword")
    .exists({ checkFalsy: true })
    .withMessage("You must type a confirmation password")
    .custom((value, { req }) => value === req.body.password)
    .withMessage("The passwords do not match"),
];

module.exports = {
  productValidation,
  loginValidation,
  signupValidation,
  resetPasswordValidation,
};
