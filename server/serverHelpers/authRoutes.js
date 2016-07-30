const auth = require('./authentication.js');
const express = require('express');
const path = require('path');

const userController = require('../db/user/userController.js');

const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/');
};

module.exports = (app) => {
  app.get('/', (req, res) => {
    const url = req.user ? '/home' : '/login';
    res.redirect(url);
  });

  app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/login.html'));
  });

  app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/signup.html'));
  });

  app.get('/getCurrentUser', (req, res) => {
    res.send(req.user);
  });

  app.use('/home', isAuthenticated, express.static(path.join(__dirname, '../../client/')));

  app.post('/login', auth.passport.authenticate('local', { failureRedirect: '/login', successRedirect: '/home'}));

  app.post('/signup', (req, res) => {
    const userCreds = req.body;
    userController.signup(userCreds, (err, data) => {
      if (err) { console.log('Signup error ', err); }
      const url = data ? '/login' : '/signup';
      res.redirect(url);
    });
  });

  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
};
