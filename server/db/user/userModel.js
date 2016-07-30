const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  fbID: String,
  username: String,
  password: String,
  house: String,
});

module.exports = mongoose.model('User', userSchema);



