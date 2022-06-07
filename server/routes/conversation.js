const express = require('express');

// model
const User = require('../models/user.js');
const Conversation = require('../models/conversation.js');
const Message = require('../models/message.js');

// environment-variables
const CLIENT_URL = process.env.CLIENT_URL;

// middlewares
const { getVerify } = require('../middlewares/verify.js');

const router = express.Router();

// gets all the conversation of login user
router.get('/', getVerify, async (req, res) => {
  const membersInfo = [];
  const lastMessages = [];
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
        }); // mappingOfMembers
        if (messages.length > 0) {
          const filterMessages = messages.filter(
            (message) => message.conversationId === convo._id.toString()
          );
          if (filterMessages.length > 0) {
            lastMessages.push(filterMessages[0]);
          }
        }
      }); // mappingOfConversation
      res.status(200).json({ membersInfo, lastMessages });
    } else {
      res.status(200).json([]);
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
