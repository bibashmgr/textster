const express = require('express');

// model
const Conversation = require('../models/conversation.js');
const Message = require('../models/message.js');

// environment-variables
const CLIENT_URL = process.env.CLIENT_URL;

// middlewares
const { getVerify } = require('../middlewares/verify.js');

const router = express.Router();

router.get('/:id', getVerify, async (req, res) => {
  try {
    const finalConversation = [];
    const messages = await Message.find().sort({ createdAt: 1 });
    const conversation = await Conversation.find({
      members: { $in: [req.user._id.toString()] },
    });
    const filterConversation = conversation.map((convo) => {
      if (convo.members.includes(req.params.id)) {
        finalConversation.push(convo);
      }
    });
    const filterMessages = messages.filter(
      (message) =>
        message.conversationId === finalConversation[0]._id.toString()
    );
    res.status(200).json(filterMessages);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
