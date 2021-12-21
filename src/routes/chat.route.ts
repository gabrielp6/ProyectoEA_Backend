import { Router } from "express"; 
import mensajeController from "../controllers/mensaje.controller";

const router = Router();

router.get('/', mensajeController.getAllMensajes);
router.post('/new', mensajeController.newMensaje);
router.delete('/delete', mensajeController.deleteChat);

export default router;