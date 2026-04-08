const express = require("express");

const router = express.Router();

const orderController = require("../controller/orderController");

router.post("/checkout", orderController.checkout);

module.exports = router;
