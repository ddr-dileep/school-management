import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    role: {
      type: String,
      enum: ["superAdmin", "admin", "staff", "student"],
      required: [true, "Role is required"],
    },
    email: {
      type: String,
      unique: [true, "Email is already registered"],
    },
    uniqueId: {
      type: String,
      unique: [true, "User id is already registered"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
    },
    imgUrl: {
      type: String,
      default:
        "https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/avatar-default-icon.png",
    },
    phone: {
      type: String,
    },
    homeAddress: {
      type: String,
    },
    currentAddress: {
      type: String,
    },
    dataOfBirth: {
      type: String,
    },
    joiningDate: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
