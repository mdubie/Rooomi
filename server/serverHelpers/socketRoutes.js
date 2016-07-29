const taskController = require('../db/task/taskController.js');
const userController = require('../db/user/userController.js');

module.exports = (socket) => {
  socket.on('getUserTasks', (user) => {
    taskController.getUserTasks(user, (userTasks) => {
      socket.emit('allUserTasks', userTasks);
    });
  });

  socket.on('addTask', (taskObject) => {
    socket.emit('oneUserTask', taskObject);
    taskController.addTask(taskObject);
  });
};
