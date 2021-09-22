const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth")
const {randomJoke} = require("../controllers/joke")

router.get("/",auth,randomJoke)

module.exports = router;
