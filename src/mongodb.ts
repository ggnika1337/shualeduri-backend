import mongoose from "mongoose";
import dotenv from "dotenv";

// FOR ERROR FIX
import dns from "dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

dotenv.config();

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI!);

    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
}
