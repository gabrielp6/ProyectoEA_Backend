import { Router } from "express"; 
import denunciaController from "../controllers/denuncia.controller";

const router = Router();

router.get('/', denunciaController.getAllDenuncias);
router.get('/getDenuncia/:id', denunciaController.getDenuncia);
router.post('/new', denunciaController.newDenuncia);
router.put('/update/:id', denunciaController.updateDenuncia);
router.delete('/delete/:id', denunciaController.deleteDenuncia);

export default router;