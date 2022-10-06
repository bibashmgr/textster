const express = require('express');

const Conversation = require('../models/conversation.js');
const Message = require('../models/message.js');

const { getVerify } = require('../middlewares/verify.js');

const router = express.Router();

router.get('/:id', getVerify, async (req, res) => {
  try {
    const finalConversation = [];
    const messages = await Message.find().sort({ createdAt: 1 });
    if (messages) {
      const conversation = await Conversation.find({
        members: { $in: [req.userId.toString()] },
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
    } else {
      res.status(200).json([]);
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post('/:id/create', getVerify, async (req, res) => {
  try {
    const finalConversation = [];
    const conversation = await Conversation.find({
      members: { $in: [req.userId.toString()] },
    });
    const filterConversation = conversation.map((convo) => {
      if (convo.members.includes(req.params.id)) {
        finalConversation.push(convo);
      }
    });
    if (finalConversation.length > 0) {
      const newMessage = new Message({
        conversationId: finalConversation[0]._id,
        senderId: req.userId.toString(),
        text: req.body.text,
      });
      const savedMessage = await newMessage.save();
      res.status(201).json({ message: 'Message sent' });
    } else {
      const newConversation = new Conversation({
        members: [req.userId.toString(), req.params.id],
      });
      const savedConversation = await newConversation.save();
      const newMessage = new Message({
        conversationId: savedConversation._id,
        senderId: req.userId.toString(),
        text: req.body.text,
      });
      const savedMessage = await newMessage.save();
      res.status(201).json({ message: 'Message sent' });
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
