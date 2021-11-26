import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from'body-parser';
import BarRoutes from './routes/bar.route'
import UsuarioRoutes from './routes/usuario.route'

const app = express();
app.set('port', process.env.PORT || 3000);
process.env.CADUCIDAD_TOKEN= '48h';


app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(bodyParser.json());

app.use('/bares', BarRoutes);
app.use('/usuarios', UsuarioRoutes);

export default app;