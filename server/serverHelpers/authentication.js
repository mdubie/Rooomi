const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const User = require('../db/user/userModel.js');
const FBStrategy = require('passport-facebook').Strategy;

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

passport.use(new FBStrategy({
  clientID: '169564226797360',
    clientSecret: 'f9a6e6f6a452fb18fa720c89d5ced750',
    callbackURL: '/login/facebook/return'
  },
  function(accessToken, refreshToken, profile, cb) {
    return cb(null, profile);
  })
);

passport.serializeUser(function(user, cb) {
  // cb(null, user._id);
  cb(null, user);
});

passport.deserializeUser(function(id, cb) {
  cb(null, id);
  // User.findOne({_id: id}, function (err, user) {
  //   if (err) { return cb(err); }
  //   cb(null, user);
  // });
});

module.exports = {
  passport,
};
