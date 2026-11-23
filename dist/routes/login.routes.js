"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_controller_1 = require("../controllers/login.controller");
const loginRoutes = (0, express_1.Router)();
loginRoutes.post("/", login_controller_1.loginController.login);
exports.default = loginRoutes;
//# sourceMappingURL=login.routes.js.map