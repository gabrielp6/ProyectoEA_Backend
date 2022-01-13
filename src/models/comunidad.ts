import mongoose, { Schema, Document} from 'mongoose';
import Usuario, {IUsuario} from './usuario';

const comunidadSchema = new Schema({
    id: {
        type: String, unique: true
    },
    name: {
        type: String, unique: true
    },
    owner:{
        type: String,
        ref: Usuario
    },
    idOwner:{
        type: String,
        ref: Usuario
    },

    usuarios: [{
        type: Schema.Types.String,
        ref: Usuario
    }],

    descripcion:{
        type: String
    },

    imageUrl:{
        type: String
    }
    });

export interface IComunidad extends Document {
    id: String;
    name: String;
    owner: String;
    idOwner: String;
    usuarios: Array<String>;
    descripcion: String;
    imageUrl: String;
}

export default mongoose.model<IComunidad>('Comunidad', comunidadSchema);