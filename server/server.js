const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const db = require('./db/config.js');
db.connect();

const middleware = require('./serverHelpers/middleware.js');
middleware(app);

const authRoutes = require('./serverHelpers/authRoutes.js');
authRoutes(app);

const socketRoutes = require('./serverHelpers/socketRoutes.js');
io.on('connection', (socket) => socketRoutes(socket));

server.listen(3000, (err) => {
  err ? console.log('server error', err) : console.log('server running port 3000');
});
