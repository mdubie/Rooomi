const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const path = require('path');

const db = require('./db/config.js');
db.connect();

const middleware = require('./serverHelpers/middleware.js');
middleware(app);

const routers = require('./serverHelpers/routes.js');
io.on('connection', (socket) => routers(socket));

// //define auth routes
app.use('/login', express.static(path.join(__dirname, '../public/login.html')));
app.use('/signup', express.static(path.join(__dirname, '../public/signup.html')));

//declare express app to handle server requests


server.listen(3000, (err) => {
  err ? console.log('server error', err) : console.log('server running port 3000');
});
