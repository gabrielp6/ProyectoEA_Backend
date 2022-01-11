"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const estadisticas_controller_1 = __importDefault(require("../controllers/estadisticas.controller"));
const router = express_1.Router();
router.get('/', estadisticas_controller_1.default.getEstadisticas);
exports.default = router;