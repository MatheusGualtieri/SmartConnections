import { z } from "zod";
import { contactSchema } from "../contactValidator";
import { DeepPartial } from "react-hook-form";

export const userSchema = z.object({
  id: z.number(),
  full_name: z.string().nonempty("Full Name is required"),
  email_login: z.string().max(120).email("Must be an email"),
  emails: z.array(z.string().max(120).email()),
  password: z.string().nonempty("Password is required"),
  createdAt: z.string(),
  phone: z.any().array().nonempty("At least one phone is required"),
  contacts: z.array(contactSchema),
});

export const userSchemaRequest = userSchema.omit({
  id: true,
  createdAt: true,
  contacts: true,
});

export const userSchemaResponse = userSchema.omit({ password: true });

export const userSchemaUpdate = userSchemaRequest.partial();

export type TUser = z.infer<typeof userSchema>;

export type TUserRequest = z.infer<typeof userSchemaRequest>;

export type TUserResponse = z.infer<typeof userSchemaResponse>;

export type TUserUpdate = DeepPartial<TUserRequest>;
