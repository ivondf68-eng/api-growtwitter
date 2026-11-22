import { Router } from "express";
import { TweetController } from "../controllers/tweet.controller";

const tweetController = new TweetController();
const tweetRoutes = Router();

tweetRoutes.post("/", tweetController.create);
tweetRoutes.get("/", tweetController.list);
tweetRoutes.get("/:idTweet", tweetController.findById);
tweetRoutes.put("/:idTweet", tweetController.update);
tweetRoutes.delete("/:idTweet", tweetController.delete);

export default tweetRoutes;