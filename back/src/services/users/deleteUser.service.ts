import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entitie";

const deleteUserService = async (id: number): Promise<void> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ id: id });

  await userRepository.remove(user!);
};

export { deleteUserService };
