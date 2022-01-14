import mongoose, { Schema, Document} from 'mongoose';

const chatSchema = new Schema({
    nombreSala: {
        type: String
    },
    usuarios: [{
        type: Schema.Types.String,
    }],

    });

export interface IEstadisticas extends Document {
    nombreSala: String;
    usuarios: Array<String>;
}

export default mongoose.model<IEstadisticas>('Estadisticas', chatSchema);