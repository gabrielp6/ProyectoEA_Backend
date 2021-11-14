import mongoose, { Schema, Document} from 'mongoose';
import Usuario, {IUsuario} from './usuario';

const barSchema = new Schema({
    id: {
        type: String,
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
    }
    });

export interface IBar extends Document {
    id: String;
    name: String;
    address: String;
    musicTaste: String;
    owner: String;
    idOwner: String;
}

export default mongoose.model<IBar>('Bar', barSchema);