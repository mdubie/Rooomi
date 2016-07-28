const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const auth = require('./authentication.js');

module.exports = (app) => {
  app.use(morgan('dev'));
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(session({ secret: 'secret', resave: false, saveUninitialized: false }));
  app.use(auth.passport.initialize());
  app.use(auth.passport.session());
};
