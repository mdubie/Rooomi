const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  desciption: String,
  assignee: String,
  assignor: String,
  createdAt: { type: Date, default: Date.now },
  dueAt: Date,
  isCompleted: { type: Boolean, default: false },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;