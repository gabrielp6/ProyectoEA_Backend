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
const publicacion_route_1 = __importDefault(require("./routes/publicacion.route"));
const denuncia_route_1 = __importDefault(require("./routes/denuncia.route"));
const estadisticas_route_1 = __importDefault(require("./routes/estadisticas.route"));
const valoracion_route_1 = __importDefault(require("./routes/valoracion.route"));
var app = (0, express_1.default)();
app.set('port', process.env.PORT || 3000);
app.use((0, morgan_1.default)('dev'));
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
app.use('/bares', bar_route_1.default);
app.use('/usuarios', usuario_route_1.default);
app.use('/comunidades', comunidad_route_1.default);
app.use('/publicaciones', publicacion_route_1.default);
app.use('/denuncias', denuncia_route_1.default);
app.use('/estadisticas', estadisticas_route_1.default);
app.use('/valoraciones', valoracion_route_1.default);
exports.default = app;
