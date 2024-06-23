"use server"
import mongoose from "mongoose";
let conn = null;

export const connectToMDb = async () => {
  if (conn) {
    console.log("old connection!!");
    return conn;
  }

  console.log("new connection!!");
  conn = mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("mongodb connected"));

  return conn;
};
