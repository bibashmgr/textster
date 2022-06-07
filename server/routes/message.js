const express = require('express');

// model
const Message = require('../models/message.js');

// environment-variables
const CLIENT_URL = process.env.CLIENT_URL;

// middlewares
const { getVerify } = require('../middlewares/verify.js');

const router = express.Router();

module.exports = router;
