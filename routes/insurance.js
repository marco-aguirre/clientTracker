const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const insuranceController = require("../controllers/insurance");
const { ensureAuth } = require("../middleware/auth");

router.post("/addInsurance", upload.single("insuranceFile"), insuranceController.addInsurance);
router.delete("/deleteInsurance", ensureAuth, insuranceController.deleteInsurance);

module.exports = router;