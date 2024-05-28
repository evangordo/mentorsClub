import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      maxlength: 20,
    },
    lastName: {
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
      enum: [
        "Technology",
        "Entertainment",
        "Sports",
        "Healthcare",
        "Finance",
        "Education",
        "Manufacturing",
        "RealEstate",
        "Hospitality",
        "Agriculture",
        "Automotive",
        "LegalServices",
        "MarketingandAdvertising",
        "Transportation",
      ],
      required: false,
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

    goals: {
      type: String,
      maxlength: 500,
    },

    career: {
      type: String,
      maxlength: 300,
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
