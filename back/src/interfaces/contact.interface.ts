import { z } from "zod";
import {
  contactSchema,
  contactSchemaRequest,
  contactsSchemaResponse,
} from "../schemas/contact.schema";
import { DeepPartial } from "typeorm";

type TContact = z.infer<typeof contactSchema>;

type TContactRequest = z.infer<typeof contactSchemaRequest>;

type TContactUpdate = DeepPartial<TContactRequest>;

type TContactsResponse = z.infer<typeof contactsSchemaResponse>;

export { TContact, TContactRequest, TContactUpdate, TContactsResponse };
