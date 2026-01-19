const express = require("express");
const {
  LoginController,
  RegisterController,
} = require("../Controller/Auth.contoller.js");
const router = express.Router();

router.post("/login", LoginController);
router.post("/register", RegisterController);

module.exports = router;