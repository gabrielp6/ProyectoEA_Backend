import { Router } from "express"; 
import publicacionController from "../controllers/publicacion.controller";

const router = Router();

router.get('/', publicacionController.getAllPublicaciones);
router.get('/getPublicacion/:id', publicacionController.getPublicacion);
router.post('/new', publicacionController.newPublicacion);
router.put('/update/:id', publicacionController.updatePublicacion);
router.delete('/delete/:id', publicacionController.deletePublicacion);
router.put('/like/:idUsuario/:idPublicacion', publicacionController.darLike);
router.put('/deshacerLike/:idUsuario/:idPublicacion', publicacionController.deshacerLike);

export default router;