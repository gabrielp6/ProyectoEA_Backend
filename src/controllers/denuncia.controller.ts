import { Request, Response} from "express";
import { getAllJSDocTags } from "typescript";
import denuncia from '../models/denuncia'

function getAllDenuncias (req:Request, res:Response): void {
    denuncia.find({}).then((data)=>{
        let status: number = 200;
        if(data==null) status = 404;
        return res.status(status).json(data);
    }).catch((err) => {
        console.log(err);
        return res.status(500).json(err);
    })

}


function getDenuncia (req:Request, res:Response): void {
    denuncia.findOne({"id":req.params.id}).then((data)=>{
        let status: number = 200;
        if(data==null) status = 404;
        return res.status(status).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })

}


function newDenuncia (req:Request, res:Response): void {
    const denuncia_1 = new denuncia({
        "id": Math.floor(Math.random() * (10000000 - 1 + 1) + 1),
        "idUsuario": req.body.idUsuario,
        "idPublicacion": req.body.idPublicacion,
        "descripcion": req.body.descripcion
    });

    
    denuncia_1.save().then((data) => {
        return res.status(201).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}


function updateDenuncia (req:Request, res:Response): void {
    const id = req.body.id;
    const idUsuario: String = req.body.idUsuario;
    const idPublicacion: String = req.body.idPublicacion;
    const descripcion: String = req.body.descripcion;
    
    

    denuncia.update({"id": id}, {$set: {"id": id,"idUsuario": idUsuario, "idPublicacion": idPublicacion, "descripcion": descripcion}}).then((data) => {
        res.status(201).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    })
}


function deleteDenuncia(req:Request, res:Response): void {
    const { id } = req.params;
    denuncia.findOne({"id":req.params.id}).remove().exec().then((data) => {
        return res.status(201).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}


export default { getAllDenuncias, getDenuncia, newDenuncia, updateDenuncia , deleteDenuncia };