import { Router } from "express";
import { LikeController } from "../controllers/like.controller";


const likeController = new LikeController();
const likeRoutes = Router();

likeRoutes.post("/:idTweet/like", likeController.create);
likeRoutes.delete("/:idTweet/like", likeController.delete);

export default likeRoutes;