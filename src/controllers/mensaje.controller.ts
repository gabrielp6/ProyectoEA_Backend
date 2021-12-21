import { raw, Request, Response} from "express";
import { getAllJSDocTags } from "typescript";
import mensaje from "../models/mensaje";

function getAllMensajes (req:Request, res:Response): void {
    mensaje.find({}).then((data)=>{
        let status: number = 200;
        if(data==null) status = 404;
        return res.status(status).json(data);
    }).catch((err) => {
        console.log(err);
        return res.status(500).json(err);
    })
}

function deleteChat(req:Request, res:Response): void {
    const { user } = req.params;
    mensaje.findOne({"sender":req.params.id}).remove().exec().then((data) => {
        return res.status(201).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}

function newMensaje (req:Request, res:Response): void {
    const mensaje_1 = new mensaje({
        "sender":  req.body.sender,
        "text": req.body.text,
        "time": req.body.time
    });
    
    mensaje_1.save().then((data) => {
        return res.status(201).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}

export default {getAllMensajes, newMensaje, deleteChat};