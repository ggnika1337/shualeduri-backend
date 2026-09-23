import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./mongodb.ts";
import { usersRouter } from "./users/users.controller.ts";

dotenv.config();

const app = express();

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.use("/users", usersRouter);

app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});
