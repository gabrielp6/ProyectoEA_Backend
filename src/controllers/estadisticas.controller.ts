import { Request, Response} from "express";
import { getAllJSDocTags } from "typescript";
import bar from "../models/bar";
import comunidad from "../models/comunidad";
import denuncia from '../models/denuncia';
import usuario from "../models/usuario";
import estadisticas from "../models/estadisticas";

async function getEstadisticas (req:Request, res:Response): Promise<void> {
    var numUsuarios = new String;
    var numBares = new String;
    var numComunidades = new String;

    await estadisticas.findOne({}).remove().exec();

    await usuario.find({}).then((data)=>{
        numUsuarios = (data.length).toString();
    })

    await bar.find({}).then((data)=>{
        numBares = (data.length).toString();
    })

    await comunidad.find({}).then((data)=>{
        numComunidades = (data.length).toString();
    })

    const estadisticas_1 = new estadisticas({
        "numUsuarios": numUsuarios,
        "numBares": numBares,
        "numComunidades": numComunidades
    })

    await estadisticas_1.save();

    await estadisticas.find({}).then((data)=>{
        let status: number = 200;
        if(data==null) status = 404;
        return res.status(status).json(data);
    }).catch((err) => {
        console.log(err);
        return res.status(500).json(err);
    })
}


export default { getEstadisticas };