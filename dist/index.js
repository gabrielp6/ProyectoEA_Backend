"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
require("./database");
var server = app_1.default.listen(3000);
//app.listen(app.get('port'));
console.log('Server in port', app_1.default.get('port'));
var io = require('socket.io').listen(server);
//const io = http.createServer(app);
var userConnection = [];
io.on('connect', (socket) => {
    console.log('nside connection');
    socket.on('users_info_to_signaling_server', (_data) => {
        var other_users = userConnection.filter(p => p.meeting_id == _data.meetingid);
        userConnection.push({
            connectionId: socket.id,
            meeting_id: _data.meetingid,
        });
    });
});
