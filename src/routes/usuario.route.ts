import { Router } from "express"; 
import usuarioController from "../controllers/usuario.controller";

const router = Router();

router.get('/', usuarioController.getAllUsuarios);
router.get('/getUsuario/:id', usuarioController.getUsuario);
router.get('/getUsuarioByEmail/:email', usuarioController.getUsuarioByEmail)
router.post('/new',usuarioController.newUsuario);
router.put('/update/:id', usuarioController.updateUsuario);
router.delete('/delete/:id', usuarioController.deleteUsuario);
router.post('/login', usuarioController.LogIn);

export default router;