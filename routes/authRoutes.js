const auth = require("../controller/userController");
const express = require("express");
const router = express.Router();

router.post("/signup", auth.signup);
router.post("/login", auth.login);
module.exports = router;
