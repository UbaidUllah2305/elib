import mongoose from "mongoose";
import { config } from "./config";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Connected to MongoDB Successfully");
    });

    mongoose.connection.on("error", (err) => {
      console.error("Failed to connect to MongoDB", err);
    });

    mongoose.connect(config.databaseUrl as string);
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  }
};

export default connectDB;
