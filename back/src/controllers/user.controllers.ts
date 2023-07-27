import { Response, Request } from "express";
import { TUserRequest } from "../interfaces/user.interfaces";
import { createUserService } from "../services/users/createUser.Service";
const createUserController = async (req: Request, res: Response) => {
  const newUser = await createUserService(req.body);
  return res.status(201).json(newUser);
};

export { createUserController };
