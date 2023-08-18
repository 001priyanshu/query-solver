const User = require("../models/user");
const Chat = require("../models/chat");

exports.raiseQuery = async (req, res) => {
  try {
    const { chatId, userId } = req.body;
    const exists = await Chat.findOne({ chatId: chatId });
    if (exists) {
      const chat = await Chat.findOne({ _id: exists._id }).populate("users");
      return res.status(200).json({
        success: true,
        message: "chat already initialized!",
        fullChat : chat
      });
    }
    const newChat = await Chat.create({
      chatId: chatId,
      users: [userId],
    });

    const fullChat = await Chat.findOne({ _id: newChat._id }).populate("users");

    return res.status(200).json({
      success : true,
      fullChat: fullChat
    });
  } catch (err) {
    console.log(err);
  }
};