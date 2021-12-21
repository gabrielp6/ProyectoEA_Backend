const { io } = require('../index');  //app?
import chatController from '../controllers/chat.controller'
import usuarioController from '../controllers/usuario.controller'
import comunidadController from '../controllers/comunidad.controller'
/*
let sockets: any [] = [];

// Mensajes de Sockets por comunidad
io.on('connection', (socket: any) => {

  socket.on('nuevoConectado', (user:any, comunidad: string) =>{ //Aqui introducimos el usuario que entra y el id de la comunidad
    socket.join(comunidad);

    //Mandamos un mensaje a todos los que esten en esa sala de que x usuario se ha conectado.
    io.to(comunidad).emit("EnviarMensaje ", user + "a la comunidad" + comunidad);
  });

  socket.on("EnviarMensaje", (message: string, comunidad: string, user: string) => {
    io.to(comunidad).emit("EnviarMensaje", message, user);
  });
  
});*/


const misMensajes: any[]=[]
io.on('conectado', function(socket: any){
  socket.on('enviarMensaje', function (data: any) {
    misMensajes.push(data)
    socket.emit("MensajeEvento", misMensajes)
    socket.broadcast.emit("MensajeEvento",misMensajes)

  });

});
/*
function getSocket(){
  return io;
}

function getVectorSockets(){
  return sockets;
}

module.exports.getSocket = getSocket;
module.exports.getVectorSockets = getVectorSockets;*/
