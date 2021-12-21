import mongoose, { Schema, Document} from 'mongoose';

const mensajeSchema = new Schema({
    sender: {
        type: String},
    text: {
        type: String},
    time:{
        type: String},
    });

export interface IMensaje extends Document {
    sender: String;
    text: String;
    time: String;
}

export default mongoose.model<IMensaje>('Mensaje', mensajeSchema);