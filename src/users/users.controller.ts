import { Router, type Request, type Response } from "express";
import { createUser, deleteUser } from "./users.service.ts";
import isValidMongoId from "../middlewares/isValidMongoId.middleware.ts";
import createUserDto from "./dto/create-user.dto.ts";
import { validateMiddleware } from "../middlewares/validate.middleware.ts";

export const usersRouter = Router();

usersRouter.post(
  "/",
  validateMiddleware(createUserDto),
  async function name(req: Request, res: Response) {
    try {
      const newUser = await createUser(req.body);

      return res.status(200).json({ data: newUser });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "SERVER_ERROR" });
    }
  },
);

usersRouter.delete(
  "/:id",
  isValidMongoId,
  async function name(req: Request, res: Response) {
    try {
      const deletedUser = await deleteUser(req.params.id as string);

      return res.status(200).json({ data: deletedUser });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "SERVER_ERROR" });
    }
  },
);
