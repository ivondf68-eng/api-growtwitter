"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tweet_controller_1 = require("../controllers/tweet.controller");
const auth_middlewares_1 = require("../middlewares/auth.middlewares");
const tweetController = new tweet_controller_1.TweetController();
const tweetRoutes = (0, express_1.Router)();
tweetRoutes.post("/", [auth_middlewares_1.authMiddleware.loginMiddleware], tweetController.create);
tweetRoutes.get("/", [auth_middlewares_1.authMiddleware.loginMiddleware], tweetController.list);
tweetRoutes.get("/:idTweet", [auth_middlewares_1.authMiddleware.loginMiddleware], tweetController.findById);
tweetRoutes.put("/:idTweet", [auth_middlewares_1.authMiddleware.loginMiddleware], tweetController.update);
tweetRoutes.delete("/:idTweet", [auth_middlewares_1.authMiddleware.loginMiddleware], tweetController.delete);
exports.default = tweetRoutes;
//# sourceMappingURL=tweet.routes.js.map