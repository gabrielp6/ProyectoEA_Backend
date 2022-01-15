import mongoose, { Schema, Document, NumericTypes} from 'mongoose';
import Bar, {IBar} from './bar';
import Usuario, {IUsuario} from './usuario';

const valoracionSchema = new Schema({
    id:{
        type: String, unique: true
    },
    
    idBar: {
        type: String,
        ref: Bar
    },

    idUsuario: {
        type: String,
        ref: Usuario
    },

    puntos: {
        type: String
    },

    descripcion: {
        type: String
    }
    });

export interface IValoracion extends Document {
    id: String;
    idBar: String;
    idUsuario: String;
    puntos: Number;
    descripcion: String;
    }

export default mongoose.model<IValoracion>('Valoracion', valoracionSchema);