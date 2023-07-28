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
  data.emails.push(data.email_login);
  const user = userRepository.create(data);

  await userRepository.save(user);

  return userSchemaResponse.parse(user);
};

export { createUserService };
