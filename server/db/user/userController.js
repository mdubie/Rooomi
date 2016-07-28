const User = require('./userModel.js');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

module.exports = {
  signup(userCreds, cb) {
    User.findOne({ username: userCreds.username }, function(err, user) {
      if (err) { cb(err, null); }
      if (user) { cb(null, null); }
      if (!user) {
        User.create({
          username: userCreds.username,
          password: userCreds.password,
          house: userCreds.house,
        }).then(cb(null, { username: userCreds.username, house: userCreds.house }));
      }
    });
  },
};
