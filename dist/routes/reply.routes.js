"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reply_controller_1 = require("./../controllers/reply.controller");
const auth_middlewares_1 = require("../middlewares/auth.middlewares");
const replyRoutes = (0, express_1.Router)();
replyRoutes.post("/:idTweetPai/replies", [auth_middlewares_1.authMiddleware.loginMiddleware], reply_controller_1.replyController.create);
replyRoutes.get("/:idTweetPai/replies", [auth_middlewares_1.authMiddleware.loginMiddleware], reply_controller_1.replyController.listByTweet);
exports.default = replyRoutes;
//# sourceMappingURL=reply.routes.js.map