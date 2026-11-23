import { Router } from 'express';
import { replyController } from './../controllers/reply.controller';
import { authMiddleware } from '../middlewares/auth.middlewares';


const replyRoutes = Router();

replyRoutes.post("/:idTweetPai/replies", [authMiddleware.loginMiddleware], replyController.create);
replyRoutes.get("/:idTweetPai/replies", [authMiddleware.loginMiddleware], replyController.listByTweet);

export default replyRoutes;