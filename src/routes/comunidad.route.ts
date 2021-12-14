import { Router } from "express"; 
import comunidadController from "../controllers/comunidad.controller";

const router = Router();

router.get('/', comunidadController.getAllComunidades);
router.get('/getComunidad/:id', comunidadController.getComunidad);
router.get('/getComunidadesByUser/:idOwner', comunidadController.getComunidadByUser);
router.post('/new',comunidadController.newComunidad);
router.put('/update/:id', comunidadController.updateComunidad);
router.delete('/delete/:id', comunidadController.deleteComunidad);
router.put('/addUsuario/:idUsuario/comunidad/:idComunidad', comunidadController.unirmeComunidad);
router.put('/deleteUsuario/:idUsuario/comunidad/:idComunidad', comunidadController.abandonarComunidad)

export default router;