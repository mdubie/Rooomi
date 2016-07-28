const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const db = require('./db/config.js');
db.connect();

const middleware = require('./serverHelpers/middleware.js');
middleware(app);

const routers = require('./serverHelpers/routes.js');
io.on('connection', (socket) => routers(socket));

server.listen(3000, (err) => {
  err ? console.log('server error', err) : console.log('server running port 3000');
});
