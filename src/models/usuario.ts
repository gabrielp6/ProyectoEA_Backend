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
    }
    });

export interface IUsuario extends Document {
    id: String;
    username: String;
    password: String;
    email: String;
}

export default mongoose.model<IUsuario>('Usuario', usuarioSchema);


usuarioSchema.plugin(uniqueValidator, {
        message: '{PATH} debe de ser único'
    })