import { Response, Request } from "express";
import { createContactService } from "../services/contacts/createContact.Service";
import { listContactService } from "../services/contacts/listContact.service";
import { updateContactService } from "../services/contacts/updateContact.service";
import { deleteContactService } from "../services/contacts/deleteContact.service";

const createContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newContact = await createContactService(
    req.body,
    Number(req.params.id)
  );
  return res.status(201).json(newContact);
};

const listContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contacts = await listContactService(Number(req.params.id));
  return res.status(200).json(contacts);
};

const updateContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const updatedContact = await updateContactService(
    req.body,
    Number(req.params.contactId)
  );
  return res.status(200).json(updatedContact);
};

const deleteContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  await deleteContactService(Number(req.params.contactId));
  return res.status(204).send();
};

export {
  createContactController,
  deleteContactController,
  listContactController,
  updateContactController,
};
