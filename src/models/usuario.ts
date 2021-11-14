import mongoose, { Schema, Document} from 'mongoose';

const usuarioSchema = new Schema({
    id: {
        type: String
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

export default mongoose.model<IUsuario>('Usuario', usuarioSchema);