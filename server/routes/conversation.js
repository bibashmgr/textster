const express = require('express');

const User = require('../models/user.js');
const Conversation = require('../models/conversation.js');
const Message = require('../models/message.js');

const { getVerify } = require('../middlewares/verify.js');

const router = express.Router();

router.get('/', getVerify, async (req, res) => {
  const membersInfo = [];
  const lastMessages = [];
  const finalConversation = [];
  try {
    const users = await User.find();
    const conversations = await Conversation.find({
      members: { $in: [req.user._id.toString()] },
    });
    const messages = await Message.find().sort({ createdAt: -1 });
    if (conversations.length > 0) {
      conversations.map((convo) => {
        convo.members.map((member) => {
          if (member !== req.user._id.toString()) {
            const filterMembers = users.filter(
              (user) => user._id.toString() === member
            );
            if (filterMembers.length > 0) {
              membersInfo.push(filterMembers[0]);
            }
          }
        });
        if (messages.length > 0) {
          const filterMessages = messages.filter(
            (message) => message.conversationId === convo._id.toString()
          );
          if (filterMessages.length > 0) {
            lastMessages.push(filterMessages[0]);
          }
        }
      });
      membersInfo.map((memberInfo, index) => {
        finalConversation.push({
          ...memberInfo._doc,
          lastMessage: lastMessages[index],
        });
      });
      finalConversation.sort((a, b) => {
        return b.lastMessage.createdAt - a.lastMessage.createdAt;
      });
      res.status(200).json(finalConversation);
    } else {
      res.status(200).json([]);
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
