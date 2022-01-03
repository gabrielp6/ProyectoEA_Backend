import mongoose, { Schema, Document} from 'mongoose';
import Usuario, {IUsuario} from './usuario';

const barSchema = new Schema({
    id: {
        type: String, unique: true
    },
    name: {
        type: String
    },
    address: {
        type: String
    },
    musicTaste: {
        type: String
    },
    owner:{
        type: String,
        ref: Usuario
    },
    idOwner:{
        type: String,
        ref: Usuario
    },

    aforo:{
        type: String
    },

    aforoMax:{
        type: String
    },

    horario:{
        type: String
    },

    descripcion:{
        type: String
    },

    imageUrl:{
        type: String
    },

    agresion:{
        type: String
    },

    idUserAgresion: {
        type: String
    },

    motivacionAgresion: {
        type: String
    },

    descAgresion: {
        type: String
    },

    solAgresion: {
        type: String
    },

    longitud:{
        type: String
    },

    latitud:{
        type: String
    }
    });

export interface IBar extends Document {
    id: String;
    name: String;
    address: String;
    musicTaste: String;
    owner: String;
    idOwner: String;
    aforo: String;
    aforoMax: String;
    horario: String;
    descripcion: String;
    imageUrl: String;
    agresion: String;
    idUserAgresion: String;
    motivacionAgresion: String;
    descAgresion: String;
    solAgresion: String;
    longitud: String;
    latitud: String;
}

export default mongoose.model<IBar>('Bar', barSchema);