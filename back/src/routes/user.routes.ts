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
  findUserMiddleware,
  tokenValidationMiddleware,
  updateUserValidationMiddleware,
  retrieveUserController
);

userRoutes.patch(
  "/:id",
  findUserMiddleware,
  tokenValidationMiddleware,
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
  findUserMiddleware,
  tokenValidationMiddleware,
  updateUserValidationMiddleware,
  validateBodyMiddleware(contactSchemaRequest),
  createContactController
);

userRoutes.get(
  "/:id/contacts",
  findUserMiddleware,
  tokenValidationMiddleware,
  listContactController
);

userRoutes.patch(
  "/:id/contacts/:contactId",
  findUserMiddleware,
  tokenValidationMiddleware,
  findContactMiddleware,
  isOwnerMiddleware,
  validateBodyMiddleware(contactSchemaUpdate),
  updateContactController
);

userRoutes.delete(
  "/:id/contacts/:contactId",
  findUserMiddleware,
  findContactMiddleware,
  tokenValidationMiddleware,
  isOwnerMiddleware,
  deleteContactController
);

export { userRoutes };
