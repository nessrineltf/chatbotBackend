const express = require("express");
const {
  creatChatRoom,
  getAllChatRoom,
} = require("../controllers/chatRoomController");
const authenticateJWT = require("../config/authorization");
const router = express.Router();
router.post("/", authenticateJWT, creatChatRoom);

router.get("/Rooms", authenticateJWT, getAllChatRoom);

module.exports = router;
