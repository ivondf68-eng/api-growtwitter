import { Router } from 'express';
import { replyController } from './../controllers/reply.controller';


const replyRoutes = Router();

replyRoutes.post("/:idTweetPai/replies", replyController.create);
replyRoutes.get("/:idTweetPai/replies", replyController.listByTweet);

export default replyRoutes;