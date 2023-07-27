import { z } from "zod";
import {
  userSchema,
  userSchemaRequest,
  userSchemaResposne,
} from "../schemas/user.schema";

type TUser = z.infer<typeof userSchema>;

type TUserRequest = z.infer<typeof userSchemaRequest>;

type TUserResponse = z.infer<typeof userSchemaResposne>;

export { TUser, TUserRequest, TUserResponse };
