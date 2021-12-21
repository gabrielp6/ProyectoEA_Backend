import { Router } from "express"; 
import chatController from '../controllers/chat.controller'
import passport from 'passport';

const router = Router();


router.get('/me/all', passport.authenticate("jwt", {session: false}), chatController.getMyChats);
router.get('/me', passport.authenticate("jwt", {session: false}), chatController.getChatsSinLeer);
router.post('/new', passport.authenticate("jwt", {session: false}), chatController.addChat);
/*router.post('/message/:id', passport.authenticate("jwt", {session: false}), chatController.sendMessage);
router.get('/abandonar/:id', passport.authenticate("jwt", {session: false}), chatController.abandonarChat);*/


export default router;