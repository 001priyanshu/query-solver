const Message = require("../models/message");
const User = require("../models/user");
const Chat = require("../models/chat");

exports.getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find({ chat: req.params.chatId })
      .populate("sender", "userId isAgent")
      .populate("chat")
      .sort({ timestamp: 1 });

    return res.json(messages);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
};