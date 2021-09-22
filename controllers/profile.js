const express = require("express");
const app = express();
app.set("db", require("../models"));
const db = app.get("db");

const viewProfile = async (req, res, next) => {
  const user = await db.user.findByPk(req.user.id);
  if (user) {
    const { firstName, lastName, email } = user;
    return res.status(200).json({
      firstName,
      lastName,
      email
    });
  }
};

module.exports = {viewProfile}