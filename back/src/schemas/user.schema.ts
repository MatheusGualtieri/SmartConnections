import { z } from "zod";
import { contactSchema } from "./contact.schema";

const userSchema = z.object({
  id: z.number(),
  full_name: z.string(),
  email_login: z.string().max(120).email(),
  emails: z.array(z.string().max(120).email()),
  password: z.string(),
  createdAt: z.string(),
  phone: z.array(z.number()).nonempty(),
  contacts: z.array(contactSchema),
});

const userSchemaRequest = userSchema.omit({
  id: true,
  createdAt: true,
  contacts: true,
});

const userSchemaResponse = userSchema.omit({ password: true });

const userSchemaUpdate = userSchemaRequest.partial();

export { userSchema, userSchemaRequest, userSchemaResponse, userSchemaUpdate };
