const auth = require('./authentication.js');
const express = require('express');
const path = require('path');

const userController = require('../db/user/userController.js');


module.exports = (app) => {
  app.get('/', auth.passport.authenticate('local', { failureRedirect: '/login', sucessRedirect: '/home'}));
  
  app.use('/home', express.static(path.join(__dirname, '../../client')));

  app.use('/login', express.static(path.join(__dirname, '../../public/login.html')));

  app.use('/signup', express.static(path.join(__dirname, '../../public/signup.html')));

  app.post('/login', auth.passport.authenticate('local', { failureRedirect: '/login', sucessRedirect: '/home' }));

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

  // //post /logout
  // app.post('/logout')
  //   //logout function
  //   //redirect to '/'
};

