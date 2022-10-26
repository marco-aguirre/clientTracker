const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
// const profileController = require("../controllers/profiles")
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/", homeController.getIndex);
// router.get("/profile", ensureAuth, profileController.getProfile);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup/practitioner", authController.getSignupP)
router.get("/signup/client", authController.getSignupC);
router.post("/signup", authController.postSignup);
// router.post("/register", authController.postRegister);

module.exports = router;