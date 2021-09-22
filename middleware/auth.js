const jwt = require("jsonwebtoken");
require("dotenv").config()
const jwtToken = process.env.jwtsecret;

module.exports = function (req, res, next) {
  const token = req.header("x-auth-token");

  if (!token) {
    return next({
        status: 401,
        errors: "No token, authorization denied",
      });
  }

  try {
    const decoded = jwt.verify(token,jwtToken);

    req.user = decoded.user;
    next();
  } catch (err) {
    return next({
        status: 401,
        errors: "Token is invalid",
      });
  }
};