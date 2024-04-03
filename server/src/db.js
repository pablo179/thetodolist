import mongoose from "mongoose";
import { dbURL } from "./config";

export const connectDB = async () => {
  try {
    await mongoose.connect(dbURL);
    console.info("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
};
