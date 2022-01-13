import mongoose, { Schema, Document} from 'mongoose';

const estadisticasSchema = new Schema({
    numUsuarios: {
        type: String
    },
    numBares: {
        type: String
    },
    numComunidades:{
        type: String
    }

    });

export interface IEstadisticas extends Document {
    numUsuarios: String;
    numBares: String;
    numComunidades: String;


}

export default mongoose.model<IEstadisticas>('Estadisticas', estadisticasSchema);