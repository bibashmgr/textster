const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 3,
    max: 15,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 20,
  },
});

const userModel = mongoose.model('users', userSchema);

module.exports = userModel;
