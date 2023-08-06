import { z } from "zod";

const contactSchema = z.object({
  id: z.number(),
  full_name: z.string(),
  emails: z.array(z.string().max(120).email()),
  createdAt: z.string(),
  phone: z.array(z.any()).nonempty(),
});

const contactSchemaRequest = contactSchema.omit({ id: true, createdAt: true });

const contactsSchemaResponse = z.array(contactSchema);

const contactSchemaUpdate = contactSchemaRequest.partial();

export {
  contactSchema,
  contactSchemaRequest,
  contactSchemaUpdate,
  contactsSchemaResponse,
};
