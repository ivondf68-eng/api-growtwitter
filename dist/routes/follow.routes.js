"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const follow_controller_1 = require("../controllers/follow.controller");
const auth_middlewares_1 = require("../middlewares/auth.middlewares");
const followController = new follow_controller_1.FollowController();
const followRoutes = (0, express_1.Router)();
followRoutes.post("/:idSeguido/follow", [auth_middlewares_1.authMiddleware.loginMiddleware], followController.create);
followRoutes.delete("/:idSeguido/follow", [auth_middlewares_1.authMiddleware.loginMiddleware], followController.delete);
exports.default = followRoutes;
//# sourceMappingURL=follow.routes.js.map