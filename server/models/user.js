const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    googleId: {
      type: String,
    },
    email: {
      type: String,
    },
    firstname: {
      type: String,
    },
    lastname: {
      type: String,
    },
    avatar: {
      type: String,
      default: 'default.png',
    },
    friends: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('users', userSchema);
