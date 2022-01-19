import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from'body-parser';
import BarRoutes from './routes/bar.route'
import UsuarioRoutes from './routes/usuario.route'
import ComunidadRoutes from './routes/comunidad.route'
import PublicacionRoutes from './routes/publicacion.route'
import DenunciaRoutes from './routes/denuncia.route'
import EstadisticasRoutes from './routes/estadisticas.route'
import ValoracionesRoutes from './routes/valoracion.route'


var app= express();
app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(bodyParser.json());

app.use('/bares', BarRoutes);
app.use('/usuarios', UsuarioRoutes);
app.use('/comunidades', ComunidadRoutes);
app.use('/publicaciones', PublicacionRoutes);
app.use('/denuncias', DenunciaRoutes);
app.use('/estadisticas', EstadisticasRoutes);
app.use('/valoraciones', ValoracionesRoutes);




export default app;