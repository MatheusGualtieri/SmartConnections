import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entitie";

const deleteContactService = async (contactId: number): Promise<void> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const contact = await contactRepository.findOneBy({ id: contactId });

  await contactRepository.remove(contact!);
};

export { deleteContactService };
