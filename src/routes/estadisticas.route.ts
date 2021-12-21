import { Router } from "express"; 
import estadisticasController from "../controllers/estadisticas.controller";

const router = Router();

router.get('/', estadisticasController.getEstadisticas);


export default router;