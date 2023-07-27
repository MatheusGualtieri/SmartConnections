import { Router } from "express";
import { createUserController } from "../controllers/user.controllers";
import { validateBodyMiddleware } from "../middlewares/validateBody.middleware";
import { userExistMiddleware } from "../middlewares/userExist.middleware";
const userRoutes = Router();

userRoutes.post(
  "",
  validateBodyMiddleware,
  userExistMiddleware,
  createUserController
);

export { userRoutes };
