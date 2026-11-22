import { Router } from "express";
import { UserController } from "../controllers/user.controller";

const userController = new UserController();
const userRoutes = Router();

userRoutes.post("/", userController.create);
userRoutes.get("/", userController.list);
userRoutes.get("/:idUser", userController.findById);
userRoutes.put("/:idUser", userController.update);
userRoutes.delete("/:idUser", userController.delete);

export default userRoutes;