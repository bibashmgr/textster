const express = require('express');

const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
dotenv.config();

const User = require('../models/user.js');

const ACCESS_TOKEN = process.env.SECRET_ACCESS_TOKEN;

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      const newUser = await new User({
        username: req.body.username,
        password: hashPassword,
      });
      const savedUser = await newUser.save();
      res.status(201).json('Registration Successful');
    } else {
      res.status(409).json('User already registered');
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      res.status(401).json('User not found');
    } else {
      const match = await bcrypt.compare(req.body.password, user.password);
      if (!match) {
        res.status(403).json('Password is incorrect');
      } else {
        const accessToken = jwt.sign({ id: user._id }, ACCESS_TOKEN, {
          expiresIn: 24 * 60 * 60,
        });
        res.status(200).json({ accessToken });
      }
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
