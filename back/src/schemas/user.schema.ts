import { z } from "zod";

const userSchema = z.object({
  id: z.number(),
  full_name: z.string(),
  email_login: z.string().max(120).email(),
  emails: z.array(z.string().max(120).email()),
  password: z.string(),
  createdAt: z.string(),
  phone: z.array(z.number()),
});

const userSchemaRequest = userSchema.omit({ id: true, createdAt: true });

const userSchemaResponse = userSchema.omit({ password: true });

const userSchemaUpdate = userSchemaRequest.partial();

export { userSchema, userSchemaRequest, userSchemaResponse, userSchemaUpdate };
