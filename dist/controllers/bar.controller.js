"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bar_2 = __importDefault(require("../models/bar"));
function getAllBares(req, res) {
    bar_2.default.find({}).then((data) => {
        let status = 200;
        if (data == null)
            status = 404;
        return res.status(status).json(data);
    }).catch((err) => {
        console.log(err);
        return res.status(500).json(err);
    });
}
function getBar(req, res) {
    bar_2.default.findOne({ "id": req.params.id }).then((data) => {
        let status = 200;
        if (data == null)
            status = 404;
        return res.status(status).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    });
}
function getBarByUser(req, res) {
    bar_2.default.find({ "idOwner": req.params.idOwner }).then((data) => {
        let status = 200;
        if (data == null)
            status = 404;
        return res.status(status).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    });
}
function newBar(req, res) {
    const bar_1 = new bar_2.default({
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
        "agresion": ""
    });
    bar_1.save().then((data) => {
        return res.status(201).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    });
}
function updateBar(req, res) {
    const id = req.params.id;
    const name = req.body.name;
    const address = req.body.address;
    const musicTaste = req.body.musicTaste;
    const owner = req.body.owner;
    const idOwner = req.body.idOwner;
    const aforo = req.body.aforo;
    const aforoMax = req.body.aforoMax;
    const horario = req.body.horario;
    const descripcion = req.body.descripcion;
    const imageUrl = req.body.imageUrl;
    const agresion = req.body.agresion;
    bar_2.default.update({ "id": id }, { $set: { "id": id, "name": name, "address": address, "musicTaste": musicTaste, "owner": owner, "idOwner": idOwner, "aforo": aforo, "aforoMax": aforoMax, "horario": horario, "descripcion": descripcion, "imageUrl": imageUrl, "agresion": agresion } }).then((data) => {
        res.status(201).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    });
}
function deleteBar(req, res) {
    const { id } = req.params;
    bar_2.default.findOne({ "id": req.params.id }).remove().exec().then((data) => {
        return res.status(201).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    });
}
exports.default = { getAllBares, getBar, getBarByUser, newBar, updateBar, deleteBar };
