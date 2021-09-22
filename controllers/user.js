const bcrypt = require("bcryptjs");
const express = require("express");
const app = express();
app.set("db", require("../models"));
const db = app.get("db");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const getSignedJwtToken = function (
  payload,
  secret = process.env.jwtsecret,
  expiresIn = 40000
) {
  return jwt.sign(payload, secret, { expiresIn });
};

// create a new user //
const createUser = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  console.log(req.body);
  let user = await db.user.findOne({ where: { email } });

  if (user) {
    return next({
      status: 400,
      errors: "user already exists",
    });
  }

  const salt = await bcrypt.genSalt(10);

  hashPassword = await bcrypt.hash(password, salt);

  user = await db.user.create({
    firstName,
    lastName,
    email,
    password: hashPassword,
  });

  await user.save();

  const payload = {
    user: {
      id: user.dataValues.id,
    },
  };
  const token = getSignedJwtToken(payload);
  return res.status(200).json({ token });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  let user = await db.user.findOne({ where: { email } });
  if (!user) {
    return next({
      status: 400,
      errors: "Invalid Credentials",
    });
  }

  const isMatch = await bcrypt.compare(password, user.dataValues.password);
  if (!isMatch) {
    return next({
      status: 400,
      errors: "Invalid Credentials",
    });
  }
  const payload = {
    user: {
      id: user.dataValues.id,
    },
  };

  const token = getSignedJwtToken(payload);

  return res.status(200).json({ token });
};

module.exports = { createUser, login };
