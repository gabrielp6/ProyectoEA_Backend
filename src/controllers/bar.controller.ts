import { Request, Response} from "express";
import { getAllJSDocTags } from "typescript";
import bar from '../models/bar'

function getAllBares (req:Request, res:Response): void {
    bar.find({}).then((data)=>{
        let status: number = 200;
        if(data==null) status = 404;
        return res.status(status).json(data);
    }).catch((err) => {
        console.log(err);
        return res.status(500).json(err);
    })
}

function getBar (req:Request, res:Response): void {
    bar.findOne({"id":req.params.id}).then((data)=>{
        let status: number = 200;
        if(data==null) status = 404;
        return res.status(status).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}

function getBarByName (req:Request, res:Response): void{
    bar.find({"name":req.params.name}).then((data)=>{
        let status: number = 200;
        if(data==null) status = 404;
        return res.status(status).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}


function getBarByUser (req:Request, res:Response): void{
    bar.find({"idOwner":req.params.idOwner}).then((data)=>{
        let status: number = 200;
        if(data==null) status = 404;
        return res.status(status).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}


function newBar (req:Request, res:Response): void {
    const bar_1 = new bar({
        "id": Math.floor(Math.random() * (10000000 - 1 + 1) + 1),
        "name": req.body.name,
        "address": req.body.address,
        "musicTaste": req.body.musicTaste,
        "owner": req.body.owner,
        "idOwner": req.body.idOwner,
        "aforo": req.body.aforo,
        "aforoMax": req.body.aforoMax,
        "horario": req.body.horario,
        "descripcion": req.body.descripcion,
        "imageUrl": req.body.imageUrl,
        "agresion": " ",
        "idUserAgresion": " ",
        "motivacionAgresion" : " ",
        "descAgresion": " ",
        "solAgresion": " ",
        "longitud": req.body.longitud,
        "latitud": req.body.latitud,
    });


    bar_1.save().then((data) => {
        return res.status(201).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}


function updateBar (req:Request, res:Response): void {
    const id = req.params.id;
    const name: String = req.body.name;
    const address: String = req.body.address;
    const musicTaste: String = req.body.musicTaste;
    const owner: String = req.body.owner;
    const idOwner: String = req.body.idOwner;
    const aforo: String = req.body.aforo;
    const aforoMax: String = req.body.aforoMax;
    const horario: String = req.body.horario;
    const descripcion: String = req.body.descripcion;
    const imageUrl: String = req.body.imageUrl;
    const agresion: String = req.body.agresion;
    const idUserAgresion: String = req.body.idUserAgresion;
    const motivacionAgresion: String = req.body.motivacionAgresion;
    const descAgresion: String = req.body.descAgresion;
    const solAgresion: String = req.body.solAgresion;    
    const longitud: String = req.body.longitud;
    const latitud: String = req.body.latitud;


    bar.update({"id": id}, {$set: {"id": id, "name": name, "address": address, "musicTaste": musicTaste, "owner": owner, "idOwner": idOwner, "aforo": aforo, "aforoMax": aforoMax, "horario": horario, "descripcion": descripcion, "imageUrl": imageUrl, "agresion": agresion, "longitud": longitud, "latitud": latitud}}).then((data) => {
        res.status(201).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    })
}


function deleteBar(req:Request, res:Response): void {
    const { id } = req.params;
    bar.findOne({"id":req.params.id}).remove().exec().then((data) => {
        return res.status(201).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}


export default { getAllBares, getBar, getBarByName, getBarByUser, newBar, updateBar , deleteBar };