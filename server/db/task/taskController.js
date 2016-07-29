const Task = require('./taskModel.js');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

module.exports = {
  getAllTasks(house, callback) {
    Task
      .find()
      .where('house').equals(house)
      .then(callback);
  },

  addTask(taskObject, callback) {
    Task
      .create({
        desciption: taskObject.desciption,
        assignee: taskObject.assignee,
        assignor: taskObject.assignor,
        house: taskObject.assignor,
        createdAt: taskObject.createdAt,
        dueAt: taskObject.dueAt,
        isCompleted: taskObject.isCompleted,
      });
  },

  completeTask(taskObject, callback) {

  },

};

