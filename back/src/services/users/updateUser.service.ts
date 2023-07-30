import { hash } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entitie";
import { TUserResponse, TUserUpdate } from "../../interfaces/user.interfaces";
import { userSchemaResponse } from "../../schemas/user.schema";

const updateUserService = async (
  data: TUserUpdate,
  id: number
): Promise<TUserResponse> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ id: id });
  if (data.password) {
    data.password = await hash(data.password, 10);
  }
  if (data.emails) {
    let isEmailLoginInEmails: boolean = false;
    for (let i = 0; i < data.emails.length; i++) {
      if (user!.email_login == data.emails[i]) {
        isEmailLoginInEmails = true;
      }
    }
    if (!isEmailLoginInEmails) {
      data.emails.push(user!.email_login);
    }
  }
  const updatedUser = userRepository.create({
    ...user,
    ...data,
  });

  await userRepository.save(updatedUser);

  return userSchemaResponse.parse(updatedUser);
};

export { updateUserService };
