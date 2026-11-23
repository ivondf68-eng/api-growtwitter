"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_controller_1 = require("../controllers/login.controller");
const auth_middlewares_1 = require("../middlewares/auth.middlewares");
const logoutRoutes = (0, express_1.Router)();
logoutRoutes.post("/", [auth_middlewares_1.authMiddleware.loginMiddleware], login_controller_1.loginController.logout);
exports.default = logoutRoutes;
//# sourceMappingURL=logout.routes.js.map