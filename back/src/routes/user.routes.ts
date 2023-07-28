import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  retrieveUserController,
  updateUserController,
} from "../controllers/user.controllers";
import { validateBodyMiddleware } from "../middlewares/validateBody.middleware";
import { userExistMiddleware } from "../middlewares/userExist.middleware";
import { userSchemaRequest, userSchemaUpdate } from "../schemas/user.schema";
import { findUserMiddleware } from "../middlewares/findUser.middleware";
import { tokenValidationMiddleware } from "../middlewares/tokenValidation.middleware";
import { updateUserValidationMiddleware } from "../middlewares/updateUserValidation.middleware";
const userRoutes = Router();

userRoutes.post(
  "",
  validateBodyMiddleware(userSchemaRequest),
  userExistMiddleware,
  createUserController
);

userRoutes.get("/:id", findUserMiddleware, retrieveUserController);

userRoutes.patch(
  "/:id",
  tokenValidationMiddleware,
  findUserMiddleware,
  updateUserValidationMiddleware,
  validateBodyMiddleware(userSchemaUpdate),
  updateUserController
);

userRoutes.delete(
  "/:id",
  findUserMiddleware,
  tokenValidationMiddleware,
  updateUserValidationMiddleware,
  deleteUserController
);

export { userRoutes };
