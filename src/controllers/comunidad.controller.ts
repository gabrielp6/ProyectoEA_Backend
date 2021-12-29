import { raw, Request, Response} from "express";
import { getAllJSDocTags } from "typescript";
import comunidad from '../models/comunidad'
import usuario from "../models/usuario";

function getAllComunidades (req:Request, res:Response): void {
    comunidad.find({}).then((data)=>{
        let status: number = 200;
        if(data==null) status = 404;
        return res.status(status).json(data);
    }).catch((err) => {
        console.log(err);
        return res.status(500).json(err);
    })
}

function getComunidad (req:Request, res:Response): void {
    comunidad.findOne({"id":req.params.id}).then((data)=>{
        let status: number = 200;
        if(data==null) status = 404;
        return res.status(status).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}


function getComunidadByUser (req:Request, res:Response): void{
    comunidad.find({"idOwner":req.params.idOwner}).then((data)=>{
        let status: number = 200;
        if(data==null) status = 404;
        return res.status(status).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}

function getComunidadByName (req:Request, res:Response): void{
    comunidad.find({"name":req.params.name}).then((data)=>{
        let status: number = 200;
        if(data==null) status = 404;
        return res.status(status).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}

function newComunidad (req:Request, res:Response): void {
    const comunidad_1 = new comunidad({
        "id":  Math.floor(Math.random() * (10000000 - 1 + 1) + 1),
        "name": req.body.name,
        "owner": req.body.owner,
        "idOwner": req.body.idOwner,
        "descripcion": req.body.descripcion,
        "imageUrl": req.body.imageUrl
    });
    
    comunidad_1.save().then((data) => {
        return res.status(201).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}


function updateComunidad (req:Request, res:Response): void {
    const id = req.params.id;
    const name: String = req.body.name;
    const owner: String = req.body.owner;
    const idOwner: String = req.body.idOwner;
    const descripcion: String = req.body.descripcion;
    const imageUrl: String = req.body.imageUrl;


    comunidad.update({"id": id}, {$set: {"id": id, "name": name, "owner": owner, "idOwner": idOwner, "descripcion": descripcion, "imageUrl": imageUrl}}).then((data) => {
        res.status(201).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    })
}


function deleteComunidad(req:Request, res:Response): void {
    const { id } = req.params;
    comunidad.findOne({"id":req.params.id}).remove().exec().then((data) => {
        return res.status(201).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}



async function unirmeComunidad(req:Request, res:Response): Promise<void>{   

    const idUsuario  = req.params.idUsuario;
    const idComunidad  = req.params.idComunidad;

    const usuario_1 = await usuario.findOne({"id": idUsuario}).exec();

    await comunidad.updateOne({"id": idComunidad}, {$addToSet: {"usuarios": usuario_1?._id}}).then((data) => {
        res.status(201).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    })
}


async function abandonarComunidad(req:Request, res:Response): Promise<void>{   

    const idUsuario  = req.params.idUsuario;
    const idComunidad  = req.params.idComunidad;

    const usuario_1 = await usuario.findOne({"id": idUsuario}).exec();
    const comunidad_1 = await comunidad.findOne({"id": idComunidad}).exec();

    console.log(comunidad_1?.usuarios);
    comunidad_1?.usuarios.splice(usuario_1?._id);
    console.log(comunidad_1?.usuarios);

    await comunidad.updateOne({"id": idComunidad}, {$set: {"usuarios": comunidad_1?.usuarios}}).then((data) => {
        res.status(201).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    })
}

export default { getAllComunidades, getComunidad, getComunidadByUser, newComunidad, updateComunidad , deleteComunidad, unirmeComunidad, abandonarComunidad, getComunidadByName };