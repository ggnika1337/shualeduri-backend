import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      immutable: true,
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: true,
      immutable: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
  },
  { timestamps: true },
);

export default mongoose.model("User", userSchema);
