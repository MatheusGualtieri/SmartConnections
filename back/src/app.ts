import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { userRoutes } from "./routes/user.routes";
import { errorHandlerMiddleware } from "./middlewares/erroHandler.middleware";
const app = express();

app.use(express.json());

app.use("/users", userRoutes);
app.use(errorHandlerMiddleware);

export default app;
