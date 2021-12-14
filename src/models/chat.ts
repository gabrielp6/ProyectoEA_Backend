import mongoose, { Schema, Document} from 'mongoose';
import { IUsuario } from './usuario';
import { IMensaje} from './mensaje';

let chatSchema = mongoose.Schema;
const chat = new chatSchema({
/*_id?*/

    name: {
        type: String
    },
    /*admin: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],*/
    image: {
        type: String
    },
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    mensajes: [
        {
            type: Object,
            ref: 'Mensaje'
        }
    ],
});

export interface IChat extends Document {
    name: string
    image: string
    /*admin: Array<IUsuario>*/
    users: Array<IUsuario>
    mensajes: Array<IMensaje>
    chatToJson(): JSON;
}

chat.methods.chatToJSON = function(){
    return {
        name: this.name,
        image: this.image,
        /*admin: this.admin,*/
        users: this.users,
        mensajes: this.mensajes
    };
}

export default mongoose.model<IChat>('Chat', chat);