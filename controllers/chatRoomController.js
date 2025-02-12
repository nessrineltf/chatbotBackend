const chatRoomModel = require("../models/chatRoomModel");
const validateChatRoom = require("../validators/validateChatRoom");

exports.creatChatRoom = async (req, res) => {
  const { errors, isValid } = validateChatRoom(req.body);
  try {
    if (!isValid) {
      res.status(500).json(errors);
    } else {
      const existChat = await chatRoomModel.findOne({
        roomName: req.body.roomName,
      });
      if (!existChat) {
         res.status(404).send({ roomName: " room not exist please create one " });
      }else{
      await chatRoomModel.create(req.body).then((result) => {
        res.status(200).json({ message: "success", result });
      });
    }}
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getAllChatRoom =  async (req, res) => {
    const chatrooms = await chatRoomModel.find({});
  
    res.status(200).json(chatrooms);
  };
