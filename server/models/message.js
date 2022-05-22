const mongoose = require('mongoose');

const messageSchema = mongoose.Schema(
  {
    users: {
      type: Array,
    },
    desc: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('messages', messageSchema);
