"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const agresion_controller_1 = __importDefault(require("../controllers/agresion.controller"));
const router = express_1.Router();
//router.get('/', agresionController.getAllAgresiones);
router.get('/getAgresion/:id', agresion_controller_1.default.getAgresion);
router.get('/getAgresionesByBar/:idBar', agresion_controller_1.default.getAgresionesByBar);
router.post('/new', agresion_controller_1.default.newAgresion);
//router.put('/update/:id', agresionController.updateAgresion);
//router.delete('/delete/:id', agresionController.deleteAgresion);
exports.default = router;
