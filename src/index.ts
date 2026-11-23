import express from 'express';
import userRoutes from './routes/user.routes';
import tweetRoutes from './routes/tweet.routes';
import likeRoutes from './routes/like.routes';
import followRoutes from './routes/follow.routes';
import replyRoutes from './routes/reply.routes';
import feedRoutes from './routes/feed.routes';
import loginRoutes from './routes/login.routes';
import logoutRoutes from './routes/logout.routes';

const app = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/users", followRoutes);
app.use("/tweets", tweetRoutes);
app.use("/tweets", likeRoutes);
app.use('/tweets', replyRoutes);
app.use("/feed", feedRoutes);
app.use("/login", loginRoutes);
app.use("/logout", logoutRoutes);

const port = process.env.PORT;

app.listen(port, () => {
    console.log("API executando...");
})