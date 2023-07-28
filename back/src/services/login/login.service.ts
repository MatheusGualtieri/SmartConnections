import { compare } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entitie";
import { TLogin } from "../../interfaces/login.interface";
import { AppError } from "../../errors/appError";
import jwt from "jsonwebtoken";
import "dotenv/config";

const loginService = async (data: TLogin) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: { email_login: data.email_login },
  });

  if (!user) {
    throw new AppError("Invalid credentials", 403);
  }

  const passwordMatch = await compare(data.password, user.password);

  if (!passwordMatch) {
    throw new AppError("Invalid credentials", 403);
  }

  const token = jwt.sign(
    {
      userName: user.full_name,
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: "1h",
      subject: String(user.id),
    }
  );

  return token;
};

export { loginService };
