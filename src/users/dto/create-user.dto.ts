import z from "zod";

const createUserDto = z.object({
  username: z.string(),
  email: z.email(),
  password: z.string().min(6).max(18),
});

export default createUserDto;
