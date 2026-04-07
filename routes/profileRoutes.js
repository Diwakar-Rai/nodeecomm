const profileController = require("../controller/profileController");
const express = require("express");
const router = express.Router();

router.get("/:id", profileController.getProfile);
router.put("/:id", profileController.updateProfile);
router.delete("/:id", profileController.deleteUser);
module.exports = router;
