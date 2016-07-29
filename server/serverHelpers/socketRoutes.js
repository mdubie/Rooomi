const taskController = require('../db/task/taskController.js');
const userController = require('../db/user/userController.js');

module.exports = (socket) => {
  socket.on('getAllTasks', (house) => {
    taskController.getAllTasks(house, (allTasks) => {
      socket.emit('allTasks', allTasks);
    });
  });

  socket.on('getAllUsers', (house) => {
    userController.getAllUsers(house, (allUsers) => {
      const allUsermames = allUsers.map(user => user.username);
      socket.emit('allUsers', allUsermames);
    });
  });

  socket.on('addTask', (taskObject) => {
    taskController.addTask(taskObject, (dbTaskObject) => {
      if (dbTaskObject) { socket.emit('addTask', dbTaskObject); }
    });
  });

  socket.on('completeTask', (taskObject) => {
    taskController.completeTask(taskObject, (dbTaskObject) => {
      if (dbTaskObject) { socket.emit('completeTask', dbTaskObject); }
    });
  });
};
