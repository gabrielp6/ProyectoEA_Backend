import mongoose, { Schema, Document, NumericTypes} from 'mongoose';
import Bar, {IBar} from './bar';

const publicacionSchema = new Schema({
    id:{
        type: String, unique: true
    },
    
    idBar: {
        type: String,
        ref: Bar
    },
    nameBar: {
        type: String
    },
    imageBar: {
        type: String
    },
    texto: {
        type: String
    },
    imageUrl:{
        type: String
    },
    fecha:{
        type: String
    },

    likes:{
        type: Number
    }
    });

export interface IPublicacion extends Document {
    id: String;
    idBar: String;
    nameBar: String;
    imageBar: String;
    texto: String;
    imageUrl: String;
    fecha: String;
    likes: Number;
}

export default mongoose.model<IPublicacion>('Publicacion', publicacionSchema);