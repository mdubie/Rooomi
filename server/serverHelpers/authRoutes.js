const auth = require('./authentication.js');
const express = require('express');
const path = require('path');
const connectEnsureLogin = require('connect-ensure-login');

const userController = require('../db/user/userController.js');

const isAuthenticated = function (req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/');
}

module.exports = (app) => {
  app.use('/home', express.static(path.join(__dirname, '../../client/')));

  app.get('/', function(req, res) {
    if (req.user) {
      res.redirect('/home');
    } else {
      res.redirect('/login');
    }
  });

  app.get('/home', isAuthenticated);

  app.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname, '../../public/login.html'))
  })

  app.get('/signup', function(req, res) {
    res.sendFile(path.join(__dirname, '../../public/signup.html'))
  })

  app.post('/login', auth.passport.authenticate('local', { failureRedirect: '/login', successRedirect: '/home'}));

  app.post('/signup', function(req, res) {
    const userCreds = req.body;
    userController.signup(userCreds, function(err, data) {
      if (!err) {
        if (data) {
          res.redirect(`/home?username=${data.username}&house=${data.house}`);
        } else {
          res.redirect('/signup');
        }
      }
    });
  });

  app.post('/signout', function(req, res) {
    req.logout();
    res.redirect('/');
  });
};

