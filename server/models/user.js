const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    googleId: {
      type: String,
    },
    email: {
      type: String,
    },
    username: {
      type: String,
      default: '',
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
    contacts: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('users', userSchema);
