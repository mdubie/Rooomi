const Message = require('./messageModel.js');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

module.exports = {
  getAllMessages(house, callback) {
    Message
      .find()
      .where('house').equals(house)
      .then(callback);
  },

  addMessage(msgObject, callback) {
    Message
      .create({
        username: msgObject.username,
        house: msgObject.house,
        message: msgObject.message,
      }, (err, data) => {
        if (err) { callback(false); }
        if (!err) { callback(data); }
      });
  },
};
