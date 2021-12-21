"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const body_parser_1 = __importDefault(require("body-parser"));
const bar_route_1 = __importDefault(require("./routes/bar.route"));
const usuario_route_1 = __importDefault(require("./routes/usuario.route"));
const comunidad_route_1 = __importDefault(require("./routes/comunidad.route"));
//import SocketRoutes from './sockets/socket'
const passport_1 = __importDefault(require("passport"));
const app = express_1.default();
app.set('port', process.env.PORT || 3000);
app.use(morgan_1.default('dev'));
app.use(cors_1.default());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
app.use(passport_1.default.initialize());
app.use('/bares', bar_route_1.default);
app.use('/usuarios', usuario_route_1.default);
app.use('/comunidades', comunidad_route_1.default);
//app.use('/chat', ChatRoutes);
//app.use('/chat')
exports.default = app;
