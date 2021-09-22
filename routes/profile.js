const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth")
const {viewProfile} = require("../controllers/profile")

router.get("/",auth,viewProfile)

module.exports = router;
