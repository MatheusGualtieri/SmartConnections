import { hash } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entitie";
import {
  TUser,
  TUserRequest,
  TUserResponse,
} from "../../interfaces/user.interfaces";
import { userSchemaResponse } from "../../schemas/user.schema";

const createUserService = async (
  data: TUserRequest
): Promise<TUserResponse> => {
  const userRepository = AppDataSource.getRepository(User);

  data.password = await hash(data.password, 10);
  let isEmailLoginInEmails: boolean = false;
  for (let i = 0; i < data.emails.length; i++) {
    if (data.email_login == data.emails[i]) {
      isEmailLoginInEmails = true;
    }
  }
  if (!isEmailLoginInEmails) {
    data.emails.push(data.email_login);
  }

  const user = userRepository.create(data);

  await userRepository.save(user);

  return userSchemaResponse.parse(user);
};

export { createUserService };
