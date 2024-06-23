"use server";

import { Course } from "@/models/creator/coursesSchema";
import { connectToMDb } from "../database/connections";
import { revalidatePath } from "next/cache";

export const createCourse = async (title) => {
  await connectToMDb();

  const data = await Course.create({
    title: title,
  });

  if (!data) {
    return false;
  }
  console.log("course created successfully");
  revalidatePath("/creator/dashboard");
  return true;
};

export const getCoursesList = async () => {
  await connectToMDb();
  const data = await Course.find();
  if (!data) {
    return false;
  }

  console.log(data);
  return data;
};
