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
    }


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

}

export default mongoose.model<IUsuario>('Usuario', usuarioSchema);


usuarioSchema.plugin(uniqueValidator, {
        message: '{PATH} debe de ser único'
    })