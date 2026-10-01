import { z } from "zod";

const updateUserDto = z.object({
  name: z.string().optional(),
  email: z.email().optional(),
  password: z.string().optional(),
});

export default updateUserDto;
