import { Request, Response} from "express";
import { getAllJSDocTags } from "typescript";
import usuario from "../models/usuario";

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


function getAllUsuarios (req:Request, res:Response): void {
    usuario.find({}).then((data)=>{
        let status: number = 200;
        if(data==null) status = 404;
        console.log(data);
        return res.status(status).json(data);
    }).catch((err) => {
        console.log(err);
        return res.status(500).json(err);
    })
}

function getUsuario (req:Request, res:Response): void {
    usuario.findOne({"id":req.params.id}).then((data)=>{
        let status: number = 200;
        if(data==null) status = 404;
        console.log(data);
        return res.status(status).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}

function newUsuario (req:Request, res:Response): void {
    const usuario_1 = new usuario({
        "id": Math.floor(Math.random() * (10000000 - 1 + 1) + 1),
        "username": req.body.username,
        "password": req.body.password,
        "email": req.body.email
    });
    
    console.log(req.body);
    usuario_1.save().then((data) => {
        return res.status(201).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}


function updateUsuario (req:Request, res:Response): void {
    const id = req.params.id;
    const username: String = req.body.username;
    const password: String = req.body.password;
    const email: String = req.body.email;


    usuario.update({"id": id}, {$set: {"id": id, "username": username, "password": password, "email": email}}).then((data) => {
        res.status(201).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    })
}


function deleteUsuario(req:Request, res:Response): void {
    const { id } = req.params;
    usuario.findOne({"id":req.params.id}).remove().exec().then((data) => {
        return res.status(201).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}

function LogIn (req:Request, res:Response): void {
    let body = req.body;
    //erro y usuarioDB any(?)
    
    usuario.findOne({ email: body.email }, (erro: any, usuarioDB: { password: any; })=>{
        if (erro) {
          return res.status(500).json({
             ok: false,
             err: erro
          })
       }
   // Verifica que exista un usuario con el mail escrita por el usuario.
      if (!usuarioDB) {
         return res.status(400).json({
           ok: false,
           err: {
               message: "Usuario o contraseña incorrectos"
           }
        })
      }
   // Valida que la contraseña escrita por el usuario, sea la almacenada en la db
      if (! bcrypt.compareSync(body.password, usuarioDB.password)){
         return res.status(400).json({
            ok: false,
            err: {
              message: "Usuario o contraseña incorrectos"
            }
         });
      }
   // Genera el token de autenticación
       let token = jwt.sign({
              usuario: usuarioDB,
           }, process.env.SEED_AUTENTICACION, {
           expiresIn: process.env.CADUCIDAD_TOKEN
       })
       res.json({
           ok: true,
           usuario: usuarioDB,
           token,
       })
   })
}


export default { getAllUsuarios, getUsuario, newUsuario, updateUsuario , deleteUsuario , LogIn};