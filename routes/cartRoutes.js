const express = require("express");
const router = express.Router();
const cartController = require("../controller/cartController");

router.post("/", cartController.addToCart);
router.get("/:userId", cartController.getCart);
router.patch("/:id", cartController.updateQuantity);
router.delete("/:id", cartController.removeItem);

module.exports = router;
