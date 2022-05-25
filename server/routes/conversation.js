const express = require('express');

// model
const Conversation = require('../models/conversation.js');

// environment-variables
const CLIENT_URL = process.env.CLIENT_URL;

const router = express.Router();

// gets all the conversation of login user
router.get('/', async (req, res) => {
  const filterConversations = [];
  const conversations = await Conversation.find();
  conversations.map((conversation) => {
    if (conversation.members.includes(req.user._id)) {
      filterConversations.push(conversation);
    }
  });
  res.status(200).json(filterConversation);
});

// creates a new conversation between two users
// if the conversation between two users already exists then redirect the login user to that conversation
router.post('/create', async (req, res) => {
  const filterConversation = [];
  const conversations = await Conversation.find();
  conversations.map((conversation) => {
    if (
      conversation.members.includes(req.user._id) &&
      conversation.members.includes(req.body._id)
    ) {
      filterConversation.push(conversation);
    }
  });
  if (filterConversation.length > 0) {
    const conversationId = filterConversation[0]._id;
    res.status(400).json({ message: 'Conversation already exist' });
    // res.redirect(`${CLIENT_URL}/conversation/${conversationId}`);
  } else {
    const newConversation = new Conversation({
      members: [req.user._id, req.body._id],
    });
    const saveConversation = await newConversation.save();
    res.status(200).json({ message: 'Conversation created' });
    // res.redirect(`${CLIENT_URL}/conversation/${saveConversation._id}`);
  }
});

module.exports = router;
