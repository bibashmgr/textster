const express = require('express');

// model
const User = require('../models/user.js');

const router = express.Router();

router.put('/update', async (req, res) => {
  User.findOne({ username: req.body.username }, (error, result) => {
    if (error) throw error;
    if (result) {
      res.status(400).json({ message: 'Username already taken' });
    } else {
      User.findByIdAndUpdate(
        req.user._id.toString(),
        {
          $set: { username: req.body.username },
        },
        { new: true },
        (err, user) => {
          if (err) throw err;
          if (user) {
            res.status(201).json(user);
          } else {
            res.status(400).json({ message: 'Something went wrong' });
          }
        }
      );
    }
  });
});

module.exports = router;
