const taskController = require('../db/task/taskController.js');
const userController = require('../db/user/userController.js');
const messageController = require('../db/message/messageController');

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
      if (dbTaskObject) {
        dbTaskObject.isCompleted = true;
        socket.emit('completeTask', dbTaskObject);
      }
    });
  });

  socket.on('getAllMessages', (house) => {
    messageController.getAllMessages(house, (allMessages) => {
      socket.emit('getAllMessages', allMessages);
    });
  });

  socket.on('addMessage', (msgObject) => {
    messageController.addMessage(msgObject, (message) => {
      socket.emit('addMessage', message);
    });
  });
};
