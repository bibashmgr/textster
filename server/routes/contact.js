const express = require('express');

// model
const User = require('../models/user.js');

const router = express.Router();

router.post('/add', async (req, res) => {
  const searchUser = await User.findOne({ email: req.body.email });
  if (searchUser) {
    const isAdded = res.user.friends.includes(searchUser._id);
    if (!isAdded) {
      User.findByIdAndUpdate(
        res.user._id,
        { $push: { friends: searchUser._id } },
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
