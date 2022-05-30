const express = require('express');

// model
const User = require('../models/user.js');

// middlewares
const { getVerify } = require('../middlewares/verify.js');

const router = express.Router();

// get all the contacts of loginUser
router.get('/', getVerify, async (req, res) => {
  try {
    const filterUsers = [];
    const results = await User.find();
    const mapResults = results.map((result) => {
      if (req.user.contacts.includes(result._id)) {
        filterUsers.push(result);
      }
    });
    res.status(200).json(filterUsers);
  } catch (error) {
    res.status(404).json(error);
  }
});

// add new contact
router.put('/add', async (req, res) => {
  try {
    const searchUser = await User.findOne({ username: req.body.username });
    if (searchUser) {
      const isAdded = req.user.contacts.includes(searchUser._id);
      if (!isAdded) {
        User.findByIdAndUpdate(
          req.user._id.toString(),
          { $push: { contacts: searchUser._id } },
          { new: true },
          (error, updatedUser) => {
            if (error) throw error;
            res.status(201).json(updatedUser);
          }
        );
      } else {
        res.status(400).json({ message: 'User is already added' });
      }
    } else {
      res.status(404).json({ message: 'User Not Found' });
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
