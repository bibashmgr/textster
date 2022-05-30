const express = require('express');

// model
const User = require('../models/user.js');

// middlewares
const { getVerify } = require('../middlewares/verify.js');

const router = express.Router();

router.put('/update', getVerify, async (req, res) => {
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
        (err, updatedUser) => {
          if (err) throw err;
          if (updatedUser) {
            res.status(201).json(updatedUser);
          } else {
            res.status(400).json({ message: 'Something went wrong' });
          }
        }
      );
    }
  });
});

module.exports = router;
