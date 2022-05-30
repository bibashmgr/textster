const express = require('express');

// model
const User = require('../models/user.js');

const router = express.Router();

// gets all the contact of loginUser
router.get('/', async (req, res) => {
  const loginUser = await User.findById(req.user.id);
  res.status(200).json(loginUser.contacts);
});

// add new contact
router.post('/add', async (req, res) => {
  const searchUser = await User.findOne({ email: req.body.email });
  if (searchUser) {
    const isAdded = res.user.contacts.includes(searchUser.id);
    if (!isAdded) {
      User.findByIdAndUpdate(
        req.user._id,
        { $push: { contacts: searchUser.id } },
        (error, updatedUser) => {
          if (error) throw error;
          res.status(200).json({ message: 'User Added' });
        }
      );
    } else {
      res.status(400).json({ message: 'User is already added' });
    }
  } else {
    res.status(404).json({ message: 'User Not Found' });
  }
});

module.exports = router;
