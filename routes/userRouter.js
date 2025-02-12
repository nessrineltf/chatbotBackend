const express = require("express");
const { Login, Register } = require("../controllers/userController");
const router = express.Router();
router.post('/login',Login);
router.post('/register',Register);
// router.post("/picture",AddPicture)

  module.exports = router; 
  