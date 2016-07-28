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

  addTask: (taskObject, callback) => {
    Task
      .create({
        desciption: taskObject.desciption,
        assignee: taskObject.assignee,
        assignor: taskObject.assignor,
        house: taskObject.house,
        createdAt: Date.now,
        dueAt: taskObject.dueAt,
        isCompleted: false,
        isOverdue: false,
      }).then(callback);
  },
};

