const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profile");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/", ensureAuth, profileController.getProfile);
router.get("/createProfile", ensureAuth, profileController.fillOutProfile);
// router.post("/createProfile", ensureAuth, profileController.createProfile);
router.get("/editProfile", ensureAuth, profileController.editProfile);
router.put("/editProfile", ensureAuth, profileController.updateProfile);
module.exports = router;