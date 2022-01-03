import { Request, Response} from "express";
import { getAllJSDocTags } from "typescript";
import agresion from '../models/agresion'

/*
function getAllAgresiones (req:Request, res:Response): void {
    agresion.find({}).then((data)=>{
        let status: number = 200;
        if(data==null) status = 404;
        return res.status(status).json(data);
    }).catch((err) => {
        console.log(err);
        return res.status(500).json(err);
    })
}
*/

function getAgresion (req:Request, res:Response): void {
    agresion.findOne({"id":req.params.id}).then((data)=>{
        let status: number = 200;
        if(data==null) status = 404;
        return res.status(status).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}


function getAgresionesByBar (req:Request, res:Response): void{
    agresion.find({"idBar":req.params.idOwner}).then((data)=>{
        let status: number = 200;
        if(data==null) status = 404;
        return res.status(status).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}


function newAgresion (req:Request, res:Response): void {
    const agresion_1 = new agresion({
        "id": Math.floor(Math.random() * (10000000 - 1 + 1) + 1),
        "idBar": req.body.idBar,
        "idUser": req.body.idUser,
        "motivacion": req.body.motivacion,
        "descripcion": req.body.descripcion,
        "solucion": req.body.solucion,
        "fecha": req.body.fecha
    });
    
    agresion_1.save().then((data) => {
        return res.status(201).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}

/*
function updateAgresion (req:Request, res:Response): void {
    const id = req.params.id;
    const idBar: String = req.body.idBar;
    const motivacion: String = req.body.motivacion;
    const descripcion: String = req.body.descripcion;
    const solucion: String = req.body.solucion;
    const fecha: String = req.body.fecha;


    agresion.update({"id": id}, {$set: {"id": id, "idBar": idBar, "motivacion": motivacion, "descripcion": descripcion, "solucion": solucion, "fecha": fecha}}).then((data) => {
        res.status(201).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    })
}


function deleteAgresion(req:Request, res:Response): void {
    const { id } = req.params;
    agresion.findOne({"id":req.params.id}).remove().exec().then((data) => {
        return res.status(201).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}
*/

export default { /*getAllAgresiones,*/ getAgresion, getAgresionesByBar, newAgresion, /*updateAgresion , deleteAgresion */};