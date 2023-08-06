import { z } from "zod";

export const contactSchema = z.object({
  id: z.number(),
  full_name: z.string(),
  emails: z.array(z.string().max(120).email().or(z.literal(""))),
  createdAt: z.string(),
  phone: z.array(z.any()).nonempty(),
});

export const contactSchemaRequest = contactSchema.omit({
  id: true,
  createdAt: true,
});

export const contactsSchemaResponse = z.array(contactSchema);

export const contactSchemaUpdate = contactSchemaRequest.partial();

export type TContact = z.infer<typeof contactSchema>;

export type TContactRequest = z.infer<typeof contactSchemaRequest>;

export type TContactUpdate = z.infer<typeof contactSchemaUpdate>;
