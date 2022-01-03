import { Router } from "express"; 
import agresionController from "../controllers/agresion.controller";

const router = Router();

//router.get('/', agresionController.getAllAgresiones);
router.get('/getAgresion/:id', agresionController.getAgresion);
router.get('/getAgresionesByBar/:idBar', agresionController.getAgresionesByBar);
router.post('/new', agresionController.newAgresion);
//router.put('/update/:id', agresionController.updateAgresion);
//router.delete('/delete/:id', agresionController.deleteAgresion);

export default router;