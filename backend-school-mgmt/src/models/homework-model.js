import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      required: [true, "User is required"],
    },
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    description: {
      type: String,
    },
    homework: {
      type: Array,
    },
    class: {
      type: String,
      required: [true, "Class is required"],
    },
    students: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
