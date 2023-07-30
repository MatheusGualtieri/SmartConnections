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
import {
  createContactController,
  deleteContactController,
  listContactController,
  updateContactController,
} from "../controllers/contact.controllers";
import {
  contactSchemaRequest,
  contactSchemaUpdate,
} from "../schemas/contact.schema";
import { findContactMiddleware } from "../middlewares/findContact.middleware";
import { isOwnerMiddleware } from "../middlewares/isOwner.middleware";
const userRoutes = Router();

//User

userRoutes.post(
  "",
  validateBodyMiddleware(userSchemaRequest),
  userExistMiddleware,
  createUserController
);

userRoutes.get(
  "/:id",
  tokenValidationMiddleware,
  updateUserValidationMiddleware,
  findUserMiddleware,
  retrieveUserController
);

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

//Contacts

userRoutes.post(
  "/:id/contacts",
  tokenValidationMiddleware,
  findUserMiddleware,
  updateUserValidationMiddleware,
  validateBodyMiddleware(contactSchemaRequest),
  createContactController
);

userRoutes.get(
  "/:id/contacts",
  tokenValidationMiddleware,
  findUserMiddleware,
  listContactController
);

userRoutes.patch(
  "/:id/contacts/:contactId",
  tokenValidationMiddleware,
  findUserMiddleware,
  findContactMiddleware,
  isOwnerMiddleware,
  validateBodyMiddleware(contactSchemaUpdate),
  updateContactController
);

userRoutes.delete(
  "/:id/contacts/:contactId",
  tokenValidationMiddleware,
  findUserMiddleware,
  findContactMiddleware,
  isOwnerMiddleware,
  deleteContactController
);

export { userRoutes };
