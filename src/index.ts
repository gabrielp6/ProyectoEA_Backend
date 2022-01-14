import app from './app'; 
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
 import http from "http";
import cors from "cors";
import './database'; 
import comunidad from './models/comunidad';

var server = app.listen(3000);
var io = require("socket.io").listen(server);
console.log("Servidor arrancado")

app.use(express.json());
var clients = {};
const connectedUsers = new Map();

io.on("connection", (socket:any) => {
    console.log("connected");
    console.log(socket.id, "ha entrado ");
    socket.on("singin", (id:any) => {
        console.log(id);
        clients[id] = socket;
        console.log(clients);
    });
    socket.on("login", (roomId: any, usr: any) => {
        console.log("Buenas "+usr+"!! Bienvenido a la sala de chat de "+roomId);
        socket.join(roomId);
        //Si no existe una entrada para esta comunidad
        if (!connectedUsers.has(roomId)) {
            connectedUsers.set(roomId, []);
        }
        //Añado al nuevo conectado al registro de conectados
        connectedUsers.get(roomId).push(usr);
        console.log("Se ha añadoido el ultimo conectado, la lista queda asi: "+connectedUsers.get(roomId));
        io.to(roomId).emit("sendMessage", usr+" se ha conectado al chat de "+roomId+".");
        // io.to(roomId).emit("sendMessage", connectedUsers.get(roomId).toString, "Conexions");
    });
    socket.on("sendMessage", (message: string, roomId: string, usr: any) => {
        console.log(usr+" ha dicho: "+ message + " en la sala de: " +roomId);
        io.to(roomId).emit("sendMessage", message, usr);

    });
    socket.on("disconnected", (roomId: any, usr: any) => {
        console.log(usr+" se ha desconectado del chat.");
        io.to(roomId).emit("sendMessage", usr+" se ha desconectado del chat.");
        //Borro al usuario
        let userList = connectedUsers.get(roomId);
        userList = userList.filter(u=> u !== usr);
        if (!userList.length) {
            connectedUsers.delete(roomId);
        } else 
        {
            connectedUsers.set(roomId, userList);
        }
        console.log ("La lista de conectados queda asi : "+userList);
        io.to(roomId).emit("sendMessage", connectedUsers.get(roomId), "Connexions");
        io.to(roomId).emit("updateUsers", connectedUsers.get(roomId));
    });
});


//prueba4
// server.listen(3000, "0.0.0.0", () => {
//     console.log("servidor activo");
// });
//prueba1
// httpServer.listen(3000);
// app.listen(app.get('port'));

//server.listen(3000);
// console.log('Server in port', app.get('port'));
// // var server = app.listen(3000);
// // var io= require('socket.io').listen(server);

// app.use(cors());
// app.use(logger("dev"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "client", "public")));
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "client", "public", "index.html"));
// });

// const socketio = require('socket.io')(httpServer);
// socketio.on("connection", (userSocket) => {
//     userSocket.on("send_message", (data) => {
//         userSocket.broadcast.emit("receive_message", data)
//     })
// });



//prueba3
// io.on("connection", (socket) => {
//     console.log('conextion recibida');
//   socket.on("joinRoom", (roomId: string, username: string) => {
//     socket.join(roomId);
//     console.log('conextion recibida');
//     io.to(roomId).emit("sendMessage", username + " joined room " + roomId);
//   });
//   socket.on(
//     "sendMessage",
//     (message: string, roomId: string, username: string) => {
//       io.to(roomId).emit("sendMessage", message, username);
//     }
//   );
// });