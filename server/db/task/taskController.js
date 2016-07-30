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
        description: taskObject.description,
        assignee: taskObject.assignee,
        assignor: taskObject.assignor,
        house: taskObject.house,
        createdAt: taskObject.createdAt,
        dueAt: taskObject.dueAt,
        isCompleted: taskObject.isCompleted,
      }, (err, data) => {
        if (err) { callback(false); }
        if (!err) { callback(data); }
      });
  },

  completeTask(taskObject, callback) {
    Task
      .update({ _id: taskObject._id },
        { isCompleted: true },
        (err, data) => {
          if (err) { callback(false); }
          if (!err) { callback(taskObject); }
        });
  },
};

