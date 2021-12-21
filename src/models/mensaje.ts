import mongoose, { Schema, Document} from 'mongoose';
import { IUsuario } from './usuario';

let mensajeSchema = mongoose.Schema;
const mensaje = new mensajeSchema({
    body: {
        type: String,
    },
    date :{
        type: Date,
    },
    sender: {
        type: String
    },
    leido: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
});

export interface IMensaje extends Document {
    body: string
    date: Date
    sender: string
    leido: Array<IUsuario>
    mensajeToJson(): JSON;
}

mensaje.methods.mensajeToJSON = function(){
    return {
        body : this.body,
        date : this.date,
        sender: this.sender,
        leido: this.leido
    };
}

export default mongoose.model<IMensaje>('Mensaje', mensaje);