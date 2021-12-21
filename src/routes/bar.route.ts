import { Router } from "express"; 
import barController from "../controllers/bar.controller";
import bar from "../models/bar";

const router = Router();

router.get('/', barController.getAllBares);
router.get('/getBar/:id', barController.getBar);
router.get('/getBaresByUser/:idOwner', barController.getBarByUser);
router.post('/new',barController.newBar);
router.put('/update/:id', barController.updateBar);
router.delete('/delete/:id', barController.deleteBar);

export default router;