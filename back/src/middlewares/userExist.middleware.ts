import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entitie";
import { AppError } from "../errors/appError";

const userExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOne({
    where: {
      email: req.body.email,
    },
  });

  if (findUser) {
    throw new AppError("User alredy exists", 409);
  }

  return next();
};

export { userExistMiddleware };
