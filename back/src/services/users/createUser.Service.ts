import { hash } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entitie";
import {
  TUser,
  TUserRequest,
  TUserResponse,
} from "../../interfaces/user.interfaces";
import { userSchemaResposne } from "../../schemas/user.schema";

const createUserService = async (
  data: TUserRequest
): Promise<TUserResponse> => {
  const userRepository = AppDataSource.getMongoRepository(User);

  data.password = await hash(data.password, 10);

  const user = userRepository.create(data);

  await userRepository.save(user);

  return userSchemaResposne.parse(user);
};

export { createUserService };
