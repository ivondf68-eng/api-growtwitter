import { Router } from "express";
import { feedController } from "../controllers/feed.controller";
import { authMiddleware } from "../middlewares/auth.middlewares";


const feedRoutes = Router();

feedRoutes.get("/", [authMiddleware.loginMiddleware], feedController.list);

export default feedRoutes;