import { Router } from "express";
import { FollowController } from "../controllers/follow.controller";
import { authMiddleware } from "../middlewares/auth.middlewares";

const followController = new FollowController();
const followRoutes = Router();

followRoutes.post("/:idSeguido/follow", [authMiddleware.loginMiddleware], followController.create);
followRoutes.delete("/:idSeguido/follow", [authMiddleware.loginMiddleware], followController.delete);

export default followRoutes;