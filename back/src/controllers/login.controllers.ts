import { loginService } from "../services/login/login.service";
import { Response, Request } from "express";

const loginController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const token = await loginService(req.body);
  return res.status(201).json({ token: token });
};

export { loginController };