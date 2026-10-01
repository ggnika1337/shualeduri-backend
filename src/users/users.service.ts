import bcrypt from "bcrypt";
import usersSchema from "./users.schema.ts";
import type { user } from "../types.ts";

export async function createUser(body: user) {
  try {
    const userExists = await usersSchema.findOne({
      email: body.email,
    });

    if (userExists) {
      return "USER_EXISTS";
    }

    const newProduct = await usersSchema.create({
      username: body.username!,
      email: body.email!,
      password: body.password!,
    });

    return newProduct;
  } catch (error) {}
}

export async function getUsers() {
  return;
}

export async function editUser() {
  return;
}

export async function deleteUser(id: string) {
  try {
    const userToDelete = await usersSchema.findByIdAndDelete(id);

    if (!userToDelete) {
      return "USER_NOT_FOUND";
    }

    return userToDelete;
  } catch (error) {
    console.log(error);
  }
}
