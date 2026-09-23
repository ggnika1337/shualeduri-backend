import mongoose from "mongoose";
import dotenv from "dotenv";

// FOR ERROR FIX
import dns from "dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

export async function connectDB() {
  await mongoose.connect(process.env.MONGO_URI!);

  console.log("MongoDB connected");
}
