"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const like_controller_1 = require("../controllers/like.controller");
const auth_middlewares_1 = require("../middlewares/auth.middlewares");
const likeController = new like_controller_1.LikeController();
const likeRoutes = (0, express_1.Router)();
likeRoutes.post("/:idTweet/like", [auth_middlewares_1.authMiddleware.loginMiddleware], likeController.create);
likeRoutes.delete("/:idTweet/like", [auth_middlewares_1.authMiddleware.loginMiddleware], likeController.delete);
exports.default = likeRoutes;
//# sourceMappingURL=like.routes.js.map