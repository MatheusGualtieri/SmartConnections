import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entitie";
import { TUserResponse } from "../../interfaces/user.interfaces";
import { userSchemaResponse } from "../../schemas/user.schema";

const retrieveUserService = async (id: number): Promise<TUserResponse> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ id: id });

  return userSchemaResponse.parse(user);
};

export { retrieveUserService };
