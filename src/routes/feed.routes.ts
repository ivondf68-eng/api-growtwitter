import { Router } from "express";
import { feedController } from "../controllers/feed.controller";


const feedRoutes = Router();

feedRoutes.get("/:idUser", feedController.list);

export default feedRoutes;