const express = require('express');

const User = require('../models/user.js');

const { getVerify } = require('../middlewares/verify.js');

const router = express.Router();

router.get('/:id', getVerify, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json('User Not Found');
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get('/', getVerify, async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json('User Not Found');
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put('/update', getVerify, async (req, res) => {
  try {
    User.findOne({ username: req.body.username }, (error, result) => {
      if (error) throw error;
      if (result) {
        res.status(400).json({ message: 'Username already taken' });
      } else {
        User.findByIdAndUpdate(
          req.userId.toString(),
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
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
