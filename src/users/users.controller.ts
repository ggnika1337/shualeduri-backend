import { Router, type Request, type Response } from "express";
import { createUser } from "./users.service.ts";
import isValidMongoId from "../middlewares/isValidMongoId.middleware.ts";

export const usersRouter = Router();

usersRouter.post("/", async function name(req: Request, res: Response) {
  try {
    const newUser = await createUser(req.body);

    return res.status(200).json({ message: "USER_CREATED", data: newUser });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "SERVER_ERROR" });
  }
});
