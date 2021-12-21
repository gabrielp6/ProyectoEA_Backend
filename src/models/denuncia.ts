import mongoose, { Schema, Document} from 'mongoose';
import Usuario, {IUsuario} from './usuario';
import Publicacion, {IPublicacion} from './publicacion';

const denunciaSchema = new Schema({
    id: {
        type: String, unique: true
    },
    idUsuario: {
        type: String, unique: true,
        ref: Usuario
    },
    idPublicacion:{
        type: String,
        ref: Publicacion
    },
    descripcion:{
        type: String
    }

    });

export interface IDenuncia extends Document {
    id: String;
    idUsuario: String;
    idPublicacion: String;
    descripcion: String;

}

export default mongoose.model<IDenuncia>('Denuncia', denunciaSchema);