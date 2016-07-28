const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  desciption: String,
  assignee: String,
  assignor: String,
  house: String,
  createdAt: { type: Date, default: Date.now },
  dueAt: Date,
  isCompleted: { type: Boolean, default: false },
  isOverdue: Boolean,
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;