"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
var uniqueValidator = require('mongoose-unique-validator');
const usuarioSchema = new mongoose_1.Schema({
    id: {
        type: String, unique: true
    },
    username: {
        type: String, unique: true
    },
    password: {
        type: String
    },
    email: {
        type: String, unique: true
    },
    nombre: {
        type: String
    },
    edad: {
        type: String
    },
    descripcion: {
        type: String
    },
    imageUrl: {
        type: String
    },
    puntuacion: {
        type: Number
    },
    online: {
        type: Boolean
    },
    private: {
        type: Boolean
    },
    notifications: [
        {
            type: Object,
            ref: 'Notification'
        }
    ],
    chats: [{
            chat: {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: 'Chat'
            },
            ultimoleido: {
                type: Number
            }
        }]
});
usuarioSchema.methods.userToJSON = function () {
    return {
        id: this.id,
        username: this.username,
        password: this.password,
        email: this.email,
        nombre: this.nombre,
        edad: this.edad,
        descripcion: this.descripcion,
        imageUrl: this.imageUrl,
        puntuacion: this.puntuacion,
        notifications: this.notifications,
        online: this.online,
        private: this.private,
        chat: this.chats,
    };
};
exports.default = mongoose_1.default.model('Usuario', usuarioSchema);
usuarioSchema.plugin(uniqueValidator, {
    message: '{PATH} debe de ser único'
});
