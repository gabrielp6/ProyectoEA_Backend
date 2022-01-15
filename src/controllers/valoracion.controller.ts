import { Request, Response} from "express";
import { getAllJSDocTags } from "typescript";
import valoracion from '../models/valoracion'

function getAllValoraciones (req:Request, res:Response): void {
    valoracion.find({}).then((data)=>{
        let status: number = 200;
        if(data==null) status = 404;
        return res.status(status).json(data);
    }).catch((err) => {
        console.log(err);
        return res.status(500).json(err);
    })

}


function getValoracion (req:Request, res:Response): void {
    valoracion.findOne({"id":req.params.id}).then((data)=>{
        let status: number = 200;
        if(data==null) status = 404;
        return res.status(status).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })

}


function getValoracionesByBar (req:Request, res:Response): void{
    valoracion.find({"idBar":req.params.idBar}).then((data)=>{
        let status: number = 200;
        if(data==null) status = 404;
        return res.status(status).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}


function newValoracion (req:Request, res:Response): void {
    const valoracion_1 = new valoracion({
        "id": Math.floor(Math.random() * (10000000 - 1 + 1) + 1),
        "idBar": req.body.idBar,
        "idUsuario": req.body.idUsuario,
        "puntos": req.body.puntos,
        "descripcion": req.body.descripcion
    });

    
    valoracion_1.save().then((data) => {
        return res.status(201).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}


function updateValoracion (req:Request, res:Response): void {
    const id = req.body.id;
    const idBar: String = req.body.idBar;
    const idUsuario: String = req.body.idUsuario;
    const puntos: String = req.body.puntos;
    const descripcion: String = req.body.descripcion;
    
    valoracion.update({"id": id}, {$set: {"id": id, "idBar": idBar, "idUsuario": idUsuario, "puntos": puntos, "descripcion": descripcion}}).then((data) => {
        res.status(201).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    })
    
}


function deleteValoracion(req:Request, res:Response): void {
    const { id } = req.params;
    valoracion.findOne({"id":req.params.id}).remove().exec().then((data) => {
        return res.status(201).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}


export default { getAllValoraciones, getValoracion, getValoracionesByBar, newValoracion, updateValoracion , deleteValoracion };