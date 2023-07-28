import { Response, Request } from "express";
import { TUserRequest } from "../interfaces/user.interfaces";
import { createUserService } from "../services/users/createUser.Service";
import { retrieveUserService } from "../services/users/retrieveUser.service";
import { updateUserService } from "../services/users/updateUser.service";
import { deleteUserService } from "../services/users/deleteUser.service";

const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newUser = await createUserService(req.body);
  return res.status(201).json(newUser);
};

const retrieveUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user = await retrieveUserService(Number(req.params.id));
  return res.status(200).json(user);
};

const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const updatedUser = await updateUserService(req.body, Number(req.params.id));
  return res.status(200).json(updatedUser);
};

const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  await deleteUserService(Number(req.params.id));
  return res.status(204).send();
};

export {
  createUserController,
  retrieveUserController,
  updateUserController,
  deleteUserController,
};
