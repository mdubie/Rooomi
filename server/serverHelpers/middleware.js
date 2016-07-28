const path = require('path');
const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


module.exports = (app) => {
  app.use(express.static(path.join(__dirname, '../../client')));
  app.use(morgan('dev'));
  app.use(express.static('public'));
  app.use(express.cookieParser());
  app.use(express.bodyParser());
  app.use(passport.initialize());
  app.use(app.router);
};
