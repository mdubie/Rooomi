const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  house: String,
});

module.exports = mongoose.model('User', userSchema);



