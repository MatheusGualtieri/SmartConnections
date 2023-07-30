import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError";

const isOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const userId: number = res.locals.token.id;
  const contactUserId: number = res.locals.contact.user.id;

  if (contactUserId != userId) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};

export { isOwnerMiddleware };
