import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entitie";
import { TContact, TContactUpdate } from "../../interfaces/contact.interface";
import { contactSchema } from "../../schemas/contact.schema";

const updateContactService = async (
  data: TContactUpdate,
  contactId: number
): Promise<TContact> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const contact = await contactRepository.findOneBy({ id: contactId });

  const updatedContact = contactRepository.create({
    ...contact,
    ...data,
  });

  await contactRepository.save(updatedContact);

  return contactSchema.parse(updatedContact);
};

export { updateContactService };
