import app from './app'; 
import socketio from 'socket.io';
import './database'; 
import http from 'http';

var server = app.listen(3000);
//app.listen(app.get('port'));
console.log('Server in port', app.get('port'));
var io = require('socket.io').listen(server);
//const io = http.createServer(app);

var userConnection: any[] = [];
io.on('connect', (socket: { on: (arg0: string, arg1: (_data: any) => void) => void; id: any; })=> {
    console.log('nside connection');
    socket.on('users_info_to_signaling_server', (_data: any) => {
        var other_users = userConnection.filter(p=> p.meeting_id == _data.meetingid);
        userConnection.push({
            connectionId: socket.id,
            meeting_id: _data.meetingid,
        })
    })
})