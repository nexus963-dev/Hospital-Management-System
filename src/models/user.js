import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    uhid: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    contact: {
      type: String,
      default: "",
    },
    gender: {
      type: String,
      enum: ["Male", "Female"],
      default: "Male",
    },
    dateOfBirth: {
      type: Date,
      default: "",
    },
    bloodGroup: {
      type: String,
      enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
      default: "B+",
    },
    profilePicture: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.User || model("User", userSchema);
