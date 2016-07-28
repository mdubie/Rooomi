const Task = require('./taskModel.js');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

module.exports = {
  getUserTasks: (username, callback) => {
    Task
      .find()
      .where('asignee').equals(username)
      .exec(callback);
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
};

