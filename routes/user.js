const express = require("express");
const router = express.Router();
const {
  createUserValidation,
} = require("../validation/users/userSignUp.validation");

const {loginValidation} = require("../validation/users/login.validation")
const { createUser, login } = require("../controllers/user");

// create a new user
router.post("/signup", createUserValidation, createUser);

// log in //
router.post("/login", loginValidation, login);



module.exports = router;
