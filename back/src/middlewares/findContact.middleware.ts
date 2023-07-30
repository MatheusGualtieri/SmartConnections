import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Contact } from "../entities/contacts.entitie";
import { AppError } from "../errors/appError";

const findContactMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const findContact = await contactRepository.findOne({
    relations: { user: true },
    where: {
      id: Number(req.params.contactId),
    },
  });

  if (!findContact) {
    throw new AppError("Contact not found", 404);
  }

  res.locals.contact = findContact;

  return next();
};

export { findContactMiddleware };
