import express from 'express';
import userRoutes from './routes/user.routes';
import tweetRoutes from './routes/tweet.routes';

const app = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/tweets", tweetRoutes);

const port = process.env.PORT;

app.listen(port, () => {
    console.log("API executando...");
})