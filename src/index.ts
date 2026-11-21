import express from 'express';
import userRoutes from './routes/user.routes';

const app = express();
app.use(express.json());
app.use("/users", userRoutes);

const port = process.env.PORT;

app.listen(port, () => {
    console.log("API executando...");
})