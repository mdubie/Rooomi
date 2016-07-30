const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
  username: String,
  house: String,
  message: String,
  time: { type: Date, default: Date.now() },
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
