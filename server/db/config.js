const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

module.exports.connect = () => {
  mongoose.connect('mongodb://127.0.0.1:27017/rooomi2', (err) => {
    err ? console.log(err) : console.log('db connected');
  });
};
