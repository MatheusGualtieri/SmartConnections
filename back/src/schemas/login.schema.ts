import { z } from "zod";

const loginSchema = z.object({
  email_login: z.string().max(120).email(),
  password: z.string(),
});

export { loginSchema };
