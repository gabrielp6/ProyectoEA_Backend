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

    prueba:{
        type: String,
    },

    tags: [{type: String}],
    usuarios: [{
        type: Schema.Types.ObjectId,
        ref: Usuario
    }]
    });

export interface IComunidad extends Document {
    id: String;
    name: String;
    owner: String;
    idOwner: String;
    usuarios: Array<IUsuario>;
}

export default mongoose.model<IComunidad>('Comunidad', comunidadSchema);