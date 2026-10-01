import { Router, type Request, type Response } from "express";
import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from "./users.service.ts";
import isValidMongoId from "../middlewares/isValidMongoId.middleware.ts";
import createUserDto from "./dto/create-user.dto.ts";
import { validateMiddleware } from "../middlewares/validate.middleware.ts";
import updateUserDto from "./dto/update-user.dto.ts";

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

usersRouter.patch(
  "/:id",
  isValidMongoId,
  validateMiddleware(updateUserDto),
  async (req: Request, res: Response) => {
    try {
      const user = await updateUser(req.params.id as string, req.body);

      if (!user) {
        return res.status(404).json({
          message: "USER_NOT_FOUND",
        });
      }

      return res.status(200).json({
        data: user,
      });
    } catch (error) {
      console.log(error);

      return res.status(500).json({
        message: "SERVER_ERROR",
      });
    }
  },
);

usersRouter.get(
  "/:id",
  isValidMongoId,
  async function name(req: Request, res: Response) {
    try {
      const user = await getUserById(req.params.id);

      return res.status(200).json({ data: user });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "SERVER_ERROR" });
    }
  },
);

usersRouter.get("/", async function name(req: Request, res: Response) {
  try {
    const users = await getUsers();

    return res.status(200).json({ data: users });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "SERVER_ERROR" });
  }
});

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
