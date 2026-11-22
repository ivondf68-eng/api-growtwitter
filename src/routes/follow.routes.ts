import { Router } from "express";
import { FollowController } from "../controllers/follow.controller";

const followController = new FollowController();
const followRoutes = Router();

followRoutes.post("/:idSeguido/follow", followController.create);
followRoutes.delete("/:idSeguido/follow", followController.delete);

export default followRoutes;