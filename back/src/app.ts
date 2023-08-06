import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { userRoutes } from "./routes/user.routes";
import { errorHandlerMiddleware } from "./middlewares/erroHandler.middleware";
import { loginRoutes } from "./routes/login.routes";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json";

const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use(errorHandlerMiddleware);
export default app;
