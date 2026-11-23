import { Router } from "express";
import { TweetController } from "../controllers/tweet.controller";
import { authMiddleware } from "../middlewares/auth.middlewares";

const tweetController = new TweetController();
const tweetRoutes = Router();

tweetRoutes.post("/", [authMiddleware.loginMiddleware], tweetController.create);
tweetRoutes.get("/", [authMiddleware.loginMiddleware], tweetController.list);
tweetRoutes.get("/:idTweet", [authMiddleware.loginMiddleware], tweetController.findById);
tweetRoutes.put("/:idTweet", [authMiddleware.loginMiddleware], tweetController.update);
tweetRoutes.delete("/:idTweet", [authMiddleware.loginMiddleware], tweetController.delete);

export default tweetRoutes;