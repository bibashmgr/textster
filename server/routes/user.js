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
        req.body.id,
        {
          $set: { username: req.body.username },
        },
        (err, user) => {
          if (err) throw err;
          if (user) {
            res.status(201).json({ message: 'Update Successfully' });
          } else {
            res.status(400).json({ message: 'Something went wrong' });
          }
        }
      );
    }
  });
});

module.exports = router;
