"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const usuario_2 = __importDefault(require("../models/usuario"));
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
function getAllUsuarios(req, res) {
    usuario_2.default.find({}).then((data) => {
        let status = 200;
        if (data == null)
            status = 404;
        console.log(data);
        return res.status(status).json(data);
    }).catch((err) => {
        console.log(err);
        return res.status(500).json(err);
    });
}
function getUsuario(req, res) {
    usuario_2.default.findOne({ "id": req.params.id }).then((data) => {
        let status = 200;
        if (data == null)
            status = 404;
        console.log(data);
        return res.status(status).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    });
}
function newUsuario(req, res) {
    const usuario_1 = new usuario_2.default({
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
    });
}
function updateUsuario(req, res) {
    const id = req.params.id;
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    usuario_2.default.update({ "id": id }, { $set: { "id": id, "username": username, "password": password, "email": email } }).then((data) => {
        res.status(201).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    });
}
function deleteUsuario(req, res) {
    const { id } = req.params;
    usuario_2.default.findOne({ "id": req.params.id }).remove().exec().then((data) => {
        return res.status(201).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    });
}
function LogIn(req, res) {
    let body = req.body;
    //erro y usuarioDB any(?)
    usuario_2.default.findOne({ email: body.email }, (erro, usuarioDB) => {
        if (erro) {
            return res.status(500).json({
                ok: false,
                err: erro
            });
        }
        // Verifica que exista un usuario con el mail escrita por el usuario.
        if (!usuarioDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: "Usuario o contraseña incorrectos"
                }
            });
        }
        // Valida que la contraseña escrita por el usuario, sea la almacenada en la db
        if (!bcrypt.compareSync(body.password, usuarioDB.password)) {
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
        });
        res.json({
            ok: true,
            usuario: usuarioDB,
            token,
        });
    });
}
exports.default = { getAllUsuarios, getUsuario, newUsuario, updateUsuario, deleteUsuario, LogIn };
