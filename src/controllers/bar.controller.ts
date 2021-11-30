import { Request, Response} from "express";
import { getAllJSDocTags } from "typescript";
import bar from '../models/bar'

function getAllBares (req:Request, res:Response): void {
    bar.find({}).then((data)=>{
        let status: number = 200;
        if(data==null) status = 404;
        console.log(data);
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
        console.log(data);
        return res.status(status).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}


function getBarByUser (req:Request, res:Response): void{
    bar.find({"idOwner":req.params.idOwner}).then((data)=>{
        let status: number = 200;
        if(data==null) status = 404;
        console.log(data);
        return res.status(status).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}


function newBar (req:Request, res:Response): void {
    const bar_1 = new bar({
        "id": req.body.id,
        "name": req.body.name,
        "address": req.body.address,
        "musicTaste": req.body.musicTaste,
        "owner": req.body.owner,
        "idOwner": req.body.idOwner
    });
    
    console.log(req.body);
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


    bar.update({"id": id}, {$set: {"id": id, "name": name, "address": address, "musicTaste": musicTaste, "owner": owner, "idOwner": idOwner}}).then((data) => {
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


export default { getAllBares, getBar, getBarByUser, newBar, updateBar , deleteBar };