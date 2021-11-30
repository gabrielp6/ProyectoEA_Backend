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


function newComunidad (req:Request, res:Response): void {
    const comunidad_1 = new comunidad({
        "id":  Math.floor(Math.random() * (10000000 - 1 + 1) + 1),
        "name": req.body.name,
        "owner": req.body.owner,
        "idOwner": req.body.idOwner
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
    //const usuarios: Usuario[] = req.body.usuarios;


    comunidad.update({"id": id}, {$set: {"id": id, "name": name, "owner": owner, "idOwner": idOwner}}).then((data) => {
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



function unirmeComunidad(req:Request, res:Response): void{   

    const idUsuario  = req.params.idUsuario;
    const idComunidad  = req.params.idComunidad;

    const usuario_1 = usuario.findOne({"id": idUsuario});
    const comunidad_1 = comunidad.findOne({"id": idComunidad});

    let vector = [];
    vector = req.body.usuarios;
    vector.push(usuario_1);

    comunidad_1.update({"id": idUsuario}, {$set: {"usuarios": vector}}).then((data) => {
        res.status(201).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    })

}


function abandonarComunidad(req:Request, res:Response): void{

    const idUsuario  = req.params.idUsuario;
    const idComunidad  = req.params.idComunidad;

    const usuario_1 = usuario.findOne({"id": idUsuario});
    const comunidad_1 = comunidad.findOne({"id": idComunidad});

    let vector = [];
    vector = req.body.usuarios;
    vector.splice(usuario_1);

    comunidad_1.update({"id": idUsuario}, {$set: {"usuarios": vector}}).then((data) => {
        res.status(201).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    })

}

export default { getAllComunidades, getComunidad, getComunidadByUser, newComunidad, updateComunidad , deleteComunidad, unirmeComunidad, abandonarComunidad };