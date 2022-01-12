import { Router } from "express"; 
import valoracionController from "../controllers/valoracion.controller";
import valoracion from "../models/valoracion";

const router = Router();

router.get('/', valoracionController.getAllValoraciones);
router.get('/getValoracion/:id', valoracionController.getValoracion);
router.get('/getValoracionesByBar/:idOwner', valoracionController.getValoracionesByBar);
router.post('/new', valoracionController.newValoracion);
router.put('/update/:id', valoracionController.updateValoracion);
router.delete('/delete/:id', valoracionController.deleteValoracion);

export default router;