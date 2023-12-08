const express = require("express");
const authController = require("../controllers/auth");
const router = express.Router();
const {
  loginValidation,
  signupValidation,
  resetPasswordValidation,
} = require("../middleware/validations");

router.get("/login", authController.getLogin);

router.get("/signup", authController.getSignup);

router.post("/login", loginValidation, authController.postLogin);

router.post("/signup", signupValidation, authController.postSignup);

router.post("/logout", authController.postLogout);

router.get("/reset", authController.getReset);

router.post("/reset", authController.postReset);

router.get("/reset/:token", authController.getNewPassword);

router.post(
  "/new-password",
  resetPasswordValidation,
  authController.postNewPassword
);

module.exports = router;
