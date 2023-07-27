import { z } from "zod";

const userSchema = z.object({
  id: z.number(),
  full_name: z.string(),
  email: z.array(z.string().max(120).email()),
  password: z.string(),
  createdAt: z.string(),
  phone: z.array(z.number()),
});

const userSchemaRequest = userSchema.omit({ id: true, createdAt: true });

const userSchemaResposne = userSchema.omit({ password: true });

export { userSchema, userSchemaRequest, userSchemaResposne };
