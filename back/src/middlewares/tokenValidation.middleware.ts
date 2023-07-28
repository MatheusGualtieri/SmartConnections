import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError";
import "dotenv/config";
import jwt from "jsonwebtoken";

const tokenValidationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization;

  if (!token) {
    throw new AppError("Missing bearer token", 401);
  }

  token = token.split(" ")[1];

  jwt.verify(
    token,
    String(process.env.SECRET_KEY),
    (err: any, decoded: any) => {
      if (err) {
        throw new AppError(err.message, 401);
      }

      res.locals.token = { id: decoded.sub, admin: decoded.admin };
      return next();
    }
  );
};

export { tokenValidationMiddleware };
