import app from './app'; 

import './database'; 

const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket');

app.listen(app.get('port'));
console.log('Server in port', app.get('port'));