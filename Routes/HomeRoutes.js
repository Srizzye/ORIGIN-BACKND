const express = require("express");
const router = express.Router();
const {
  menSection,
  womenSection,
  heroSection,
  otherSection,
} = require("../Controller/Home.controller.js");
// pls work niga

router.get("/men", menSection);
router.get("/women", womenSection);
router.get("/allother", otherSection);
router.get("/hero", heroSection);

module.exports = router;
