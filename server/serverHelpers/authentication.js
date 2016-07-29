const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const User = require('../db/user/userModel.js');

passport.use(new Strategy(
  (username, password, cb) => {
    User.findOne({ username }, (err, user) => {
      if (err) { return cb(err); }
      if (!user) { return cb(null, false); }
      if (user.password != password) { return cb(null, false); }
      return cb(null, user);
    });
  })
);

passport.serializeUser(function(user, cb) {
  cb(null, user._id);
});

passport.deserializeUser(function(id, cb) {
  User.findOne({_id: id}, function (err, user) {
    if (err) { return cb(err); }
    cb(null, user);
  });
});

module.exports = {
  passport,
};
