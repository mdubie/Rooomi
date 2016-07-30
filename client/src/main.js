import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const socket = require('socket.io-client')();

ReactDOM.render(<App socket={socket} />, document.getElementById('app'));
