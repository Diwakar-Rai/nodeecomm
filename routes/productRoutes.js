const express = require("express");
const productController = require("../controller/productController");
const router = express.Router();

router.post("/", productController.createProduct);

module.exports = router;
