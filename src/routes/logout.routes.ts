import { Router } from "express";
import { loginController } from "../controllers/login.controller";
import { authMiddleware } from "../middlewares/auth.middlewares";


const logoutRoutes = Router();

logoutRoutes.post("/", [authMiddleware.loginMiddleware], loginController.logout);

export default logoutRoutes;