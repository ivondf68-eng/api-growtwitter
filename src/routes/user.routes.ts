import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { authMiddleware } from "../middlewares/auth.middlewares";

const userController = new UserController();
const userRoutes = Router();

userRoutes.post("/", userController.create);
userRoutes.get("/", [authMiddleware.loginMiddleware], userController.list);
userRoutes.get("/:idUser", [authMiddleware.loginMiddleware], userController.findById);
userRoutes.put("/:idUser", [authMiddleware.loginMiddleware], userController.update);
userRoutes.delete("/:idUser", [authMiddleware.loginMiddleware], userController.delete);

export default userRoutes;