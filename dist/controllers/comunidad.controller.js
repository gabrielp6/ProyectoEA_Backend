"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const comunidad_2 = __importDefault(require("../models/comunidad"));
const usuario_2 = __importDefault(require("../models/usuario"));
function getAllComunidades(req, res) {
    comunidad_2.default.find({}).then((data) => {
        let status = 200;
        if (data == null)
            status = 404;
        return res.status(status).json(data);
    }).catch((err) => {
        console.log(err);
        return res.status(500).json(err);
    });
}
function getComunidad(req, res) {
    comunidad_2.default.findOne({ "id": req.params.id }).then((data) => {
        let status = 200;
        if (data == null)
            status = 404;
        return res.status(status).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    });
}
function getComunidadByUser(req, res) {
    comunidad_2.default.find({ "idOwner": req.params.idOwner }).then((data) => {
        let status = 200;
        if (data == null)
            status = 404;
        return res.status(status).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    });
}
function newComunidad(req, res) {
    const comunidad_1 = new comunidad_2.default({
        "id": Math.floor(Math.random() * (10000000 - 1 + 1) + 1),
        "name": req.body.name,
        "owner": req.body.owner,
        "idOwner": req.body.idOwner
    });
    comunidad_1.save().then((data) => {
        return res.status(201).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    });
}
function updateComunidad(req, res) {
    const id = req.params.id;
    const name = req.body.name;
    const owner = req.body.owner;
    const idOwner = req.body.idOwner;
    //const usuarios: Usuario[] = req.body.usuarios;
    comunidad_2.default.update({ "id": id }, { $set: { "id": id, "name": name, "owner": owner, "idOwner": idOwner } }).then((data) => {
        res.status(201).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    });
}
function deleteComunidad(req, res) {
    const { id } = req.params;
    comunidad_2.default.findOne({ "id": req.params.id }).remove().exec().then((data) => {
        return res.status(201).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    });
}
function unirmeComunidad(req, res) {
    const idUsuario = req.params.idUsuario;
    const idComunidad = req.params.idComunidad;
    const usuario_1 = usuario_2.default.findOne({ "id": idUsuario });
    const comunidad_1 = comunidad_2.default.findOne({ "id": idComunidad });
    let vector = [];
    vector = req.body.usuarios;
    vector.push(usuario_1);
    comunidad_1.update({ "id": idUsuario }, { $set: { "usuarios": vector } }).then((data) => {
        res.status(201).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    });
}
function abandonarComunidad(req, res) {
    const idUsuario = req.params.idUsuario;
    const idComunidad = req.params.idComunidad;
    const usuario_1 = usuario_2.default.findOne({ "id": idUsuario });
    const comunidad_1 = comunidad_2.default.findOne({ "id": idComunidad });
    let vector = [];
    vector = req.body.usuarios;
    vector.splice(usuario_1);
    comunidad_1.update({ "id": idUsuario }, { $set: { "usuarios": vector } }).then((data) => {
        res.status(201).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    });
}
exports.default = { getAllComunidades, getComunidad, getComunidadByUser, newComunidad, updateComunidad, deleteComunidad, unirmeComunidad, abandonarComunidad };
