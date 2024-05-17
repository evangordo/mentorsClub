import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      maxlength: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      maxlength: 50,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    industry: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      maxlength: 500,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      enum: ["mentee", "mentor"],
      required: true,
    },
    // Mentee specific fields
    goals: {
      type: String,
      maxlength: 500,
    },
    // Mentor specific fields
    career: {
      type: String,
      maxlength: 500,
    },
    mentoringTopics: {
      type: String,
      maxlength: 500,
    },
    available: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
