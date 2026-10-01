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

export async function getUserById(id: string) {
  try {
    const user = await usersSchema.findById(id);

    return user;
  } catch (error) {
    console.log(error);
  }
}

export async function getUsers() {
  try {
    const users = await usersSchema.find();

    return users;
  } catch (error) {
    console.log(error);
  }
}

export async function updateUser(id: string, data: any) {
  try {
    const user = await usersSchema.findByIdAndUpdate(
      id,
      { $set: data },
      {
        returnDocument: "after",
      },
    );

    return user;
  } catch (error) {
    console.log(error);
  }
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
