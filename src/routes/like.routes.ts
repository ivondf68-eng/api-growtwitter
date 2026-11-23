import { Router } from "express";
import { LikeController } from "../controllers/like.controller";
import { authMiddleware } from "../middlewares/auth.middlewares";


const likeController = new LikeController();
const likeRoutes = Router();

likeRoutes.post("/:idTweet/like", [authMiddleware.loginMiddleware], likeController.create);
likeRoutes.delete("/:idTweet/like", [authMiddleware.loginMiddleware], likeController.delete);

export default likeRoutes;