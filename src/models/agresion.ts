import mongoose, { Schema, Document} from 'mongoose';

const agresionSchema = new Schema({
    id: {
        type: String, unique: true
    },
    idBar: {
        type: String
    },
    idUser: {
        type: String
    },
    motivacion: {
        type: String
    },
    descripcion:{
        type: String
    },
    solucion:{
        type: String
    },
    fecha:{
        type: String
    },


    });

export interface IAgresion extends Document {
    id: String;
    idBar: String;
    idUser: String;
    motivacion: String;
    descripcion: String;
    solucion: String;
    fecha: String;

}

export default mongoose.model<IAgresion>('Agresion', agresionSchema);

