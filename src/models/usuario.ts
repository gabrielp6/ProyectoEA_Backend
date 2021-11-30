import mongoose, { Schema, Document} from 'mongoose';
var uniqueValidator = require('mongoose-unique-validator');


const usuarioSchema = new Schema({
    id: {
        type: String, unique:true
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String
    }
    });

export interface IUsuario extends Document {
    id: String;
    username: String;
    password: String;
    email: String;
}

usuarioSchema.plugin(uniqueValidator, {
    message: '{PATH} debe de ser único'
})

export default mongoose.model<IUsuario>('Usuario', usuarioSchema);