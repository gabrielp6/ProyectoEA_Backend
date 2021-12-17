import mongoose, { Schema, Document} from 'mongoose';
var uniqueValidator = require('mongoose-unique-validator');

const usuarioSchema = new Schema({
    id: {
        type: String, unique: true
    },
    username: {
        type: String, unique: true
    },
    password: {
        type: String
    },
    email: {
        type: String, unique: true
    },
    nombre:{
        type: String
    },
    edad:{
        type: String
    },
    descripcion:{
        type: String
    },
    imageUrl:{
        type: String
    },
    puntuacion:{
        type: Number
    },
    online: {
        type: Boolean
    },
    private: {
        type: Boolean
    },
    notifications: [
        {
            type: Object,
            ref: 'Notification'
        }
    ],
    chats: [{
        chat: {
            type: Schema.Types.ObjectId,
            ref: 'Chat'
        },
        
        ultimoleido: {
            type: Number
        }
    }]


    });

export interface IUsuario extends Document {
    id: String;
    username: String;
    password: String;
    email: String;
    nombre: String;
    edad: String;
    descripcion: String;
    imageUrl: String;
    puntuacion: Number;
    online: boolean;
    private: boolean;
    notifications: Array<any>;
    chats: Array<any>;
    userToJson(): JSON;

}
usuarioSchema.methods.userToJSON = function(){
    return {
        id: this.id,
        username: this.username,
        password: this.password,
        email: this.email,
        nombre: this.nombre,
        edad: this.edad,
        descripcion: this.descripcion,
        imageUrl: this.imageUrl,
        puntuacion: this.puntuacion,
        notifications: this.notifications,
        online: this.online,
        private: this.private,
        chat: this.chats,
    };
}

export default mongoose.model<IUsuario>('Usuario', usuarioSchema);


usuarioSchema.plugin(uniqueValidator, {
        message: '{PATH} debe de ser único'
    })