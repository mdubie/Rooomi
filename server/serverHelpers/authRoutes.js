const auth = require('./authentication.js');
const connectEnsureLogin = require('connect-ensure-login');
const express = require('express');
const path = require('path');

module.exports = (app) => {
  app.use('/login', express.static(path.join(__dirname, '../../public/login.html')));
  app.use('/signup', express.static(path.join(__dirname, '../../public/signup.html')));
  // app.get('/login',
  //   function(req, res){
  //     res.sendFile(path.join(__dirname, '../../public/login.html'));
  //   });

  // app.get('/login',
  //   function(req, res){
  //     res.sendFile(path.join(__dirname, '../../public/login.html'));
  //   });
    
  app.post('/login', 
    auth.passport.authenticate('local', { failureRedirect: '/login' }),
    function(req, res) {
      res.redirect('/');
    });


  app.get('/profile',
    connectEnsureLogin.ensureLoggedIn(),
    function(req, res){
      res.render('profile', { user: req.user });
    });
};

