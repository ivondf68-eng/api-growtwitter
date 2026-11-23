"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const auth_middlewares_1 = require("../middlewares/auth.middlewares");
const userController = new user_controller_1.UserController();
const userRoutes = (0, express_1.Router)();
userRoutes.post("/", userController.create);
userRoutes.get("/", [auth_middlewares_1.authMiddleware.loginMiddleware], userController.list);
userRoutes.get("/:idUser", [auth_middlewares_1.authMiddleware.loginMiddleware], userController.findById);
userRoutes.put("/:idUser", [auth_middlewares_1.authMiddleware.loginMiddleware], userController.update);
userRoutes.delete("/:idUser", [auth_middlewares_1.authMiddleware.loginMiddleware], userController.delete);
exports.default = userRoutes;
//# sourceMappingURL=user.routes.js.map