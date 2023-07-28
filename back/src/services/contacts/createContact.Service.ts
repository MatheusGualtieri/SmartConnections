import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entitie";
import { User } from "../../entities/user.entitie";
import { TContact, TContactRequest } from "../../interfaces/contact.interface";
import { contactSchema } from "../../schemas/contact.schema";

const createContactService = async (
  data: TContactRequest,
  userId: number
): Promise<TContact> => {
  const userRepository = AppDataSource.getRepository(User);
  const contactRepository = AppDataSource.getRepository(Contact);

  const user = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  const contact = contactRepository.create({ ...data, user: user! });

  await contactRepository.save(contact);

  return contactSchema.parse(contact);
};

export { createContactService };
