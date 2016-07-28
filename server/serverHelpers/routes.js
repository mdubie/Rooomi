const taskController = require('../db/chatroom/taskController.js');
const userController = require('../db/user/userController.js');

module.exports = (socket) => {
  socket.on('getUserTasks', (user) => {
    taskController.getUserTasks(user, (userTasks) => {
      socket.emit('updatedUserTasks', userTasks);
    });
  });

  socket.on('addTask', (taskObject) => {
    //update user tasks 
    taskController.addTask(taskObject, (userTasks) => {
      socket.emit('addTask', userTasks);
    });
  });



  
};
