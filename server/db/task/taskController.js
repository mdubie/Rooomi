const Task = require('./taskModel.js');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

module.exports = {
  getUserTasks: (username, callback) => {
    Task
      .find()
      .where('assignee').equals(username)
      .exec(callback);
  },

  getAllTasks: (callback) => {
    Task
      .find()
      .then(callback);
  },

  addTask: (taskObject) => {
    Task
      .create({
        desciption: taskObject.desciption,
        assignee: taskObject.assignee,
        assignor: taskObject.assignor,
        createdAt: taskObject.createdAt,
        dueAt: taskObject.dueAt,
        isCompleted: taskObject.isCompleted,
      });
  },

  //completeTask
  
};

