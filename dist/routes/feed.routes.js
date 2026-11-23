"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const feed_controller_1 = require("../controllers/feed.controller");
const auth_middlewares_1 = require("../middlewares/auth.middlewares");
const feedRoutes = (0, express_1.Router)();
feedRoutes.get("/", [auth_middlewares_1.authMiddleware.loginMiddleware], feed_controller_1.feedController.list);
exports.default = feedRoutes;
//# sourceMappingURL=feed.routes.js.map