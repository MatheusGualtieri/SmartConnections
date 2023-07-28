import { Router } from "express";
import { validateBodyMiddleware } from "../middlewares/validateBody.middleware";
import { loginSchema } from "../schemas/login.schema";
import { loginController } from "../controllers/login.controllers";

const loginRoutes = Router();

loginRoutes.post("", validateBodyMiddleware(loginSchema), loginController);

export { loginRoutes };
