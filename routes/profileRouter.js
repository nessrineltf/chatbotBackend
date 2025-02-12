const express = require("express");
const {
  AddPicture,
  getAllProfile,
} = require("../controllers/profileController");
const authenticateJWT = require("../config/authorization");

const router = express.Router();

router.post("/profiles", getAllProfile);
router.post("/picture", authenticateJWT, AddPicture);
module.exports = router;
