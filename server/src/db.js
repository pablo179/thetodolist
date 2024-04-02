import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://pablo179:espejismos@pablostest.my117zk.mongodb.net/todolist",
    );
    console.info("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
};
