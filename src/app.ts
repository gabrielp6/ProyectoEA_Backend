import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from'body-parser';
import BarRoutes from './routes/bar.route'
import UsuarioRoutes from './routes/usuario.route'
import ComunidadRoutes from './routes/comunidad.route'
import ChatRoutes from './routes/chat.routes';
//import SocketRoutes from './sockets/socket'

import passport from 'passport';

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(bodyParser.json());
app.use(passport.initialize());



app.use('/bares', BarRoutes);
app.use('/usuarios', UsuarioRoutes);
app.use('/comunidades', ComunidadRoutes);
//app.use('/chat', ChatRoutes);
//app.use('/chat')

export default app;