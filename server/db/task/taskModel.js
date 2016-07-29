const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  description: String,
  assignee: String,
  assignor: String,
  createdAt: { type: Date, default: Date.now },
  dueAt: Date,
  isCompleted: { type: Boolean, default: false },
});

const Task = mongoose.model('Task', taskSchema);

//Task.create({ description: 'Code', assignee: 'Steven', assignor: 'Roy', dueAt: Date.now(), isCompleted: false });
//Task.create({ description: 'Brush', assignee: 'Roy', assignor: 'Steven', dueAt: Date.now(), isCompleted: false });

module.exports = Task;