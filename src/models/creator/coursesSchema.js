import mongoose from "mongoose";
const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  price: {
    type: Number,
  },
  // videos: [{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Videos',
  // },],

  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export const Course =
  mongoose.models.Courses || mongoose.model("Courses", courseSchema);
