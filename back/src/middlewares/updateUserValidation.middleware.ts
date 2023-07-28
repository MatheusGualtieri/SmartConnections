import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError";

const updateUserValidationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const userId: number = res.locals.token.id;
  const paramsId: number = Number(req.params.id);

  if (paramsId != userId) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};

export { updateUserValidationMiddleware };
