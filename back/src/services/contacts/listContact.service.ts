import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entitie";
import { TContactsResponse } from "../../interfaces/contact.interface";
import { contactsSchemaResponse } from "../../schemas/contact.schema";

const listContactService = async (
  userId: number
): Promise<TContactsResponse> => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contacts = await contactRepository
    .createQueryBuilder("contact")
    .select("contact")
    .where("contact.userId = :id", { id: userId })
    .getMany();

  return contactsSchemaResponse.parse(contacts);
};

export { listContactService };
