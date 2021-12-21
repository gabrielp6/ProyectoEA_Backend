"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const chat_controller_1 = __importDefault(require("../controllers/chat.controller"));
const passport_1 = __importDefault(require("passport"));
const router = express_1.Router();
router.get('/me/all', passport_1.default.authenticate("jwt", { session: false }), chat_controller_1.default.getMyChats);
router.get('/me', passport_1.default.authenticate("jwt", { session: false }), chat_controller_1.default.getChatsSinLeer);
router.post('/new', passport_1.default.authenticate("jwt", { session: false }), chat_controller_1.default.addChat);
router.post('/message/:id', passport_1.default.authenticate("jwt", { session: false }), chat_controller_1.default.sendMessage);
router.get('/abandonar/:id', passport_1.default.authenticate("jwt", { session: false }), chat_controller_1.default.abandonarChat);
exports.default = router;
