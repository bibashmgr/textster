const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
    },
    username: {
      type: String,
      min: 3,
      max: 20,
      unique: true,
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
      default: 'default.jpg',
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
