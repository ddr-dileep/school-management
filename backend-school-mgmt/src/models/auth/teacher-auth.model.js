import mongoose from "mongoose";

const SuperAdminSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      default: "superAdmin",
      required: [true, "Role is required"],
    },
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "Email is already registered"],
    },
    school: {
      type: [],
    },
    phone: {
      type: String,
      unique: [true, "Phone is already registered"],
    },
    uniqueId: {
      type: String,
      required: [true, "Id is required"],
      unique: [true, "ID is already registered"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  {
    timestamps: true,
  }
);

const SuperAdmin = mongoose.model("SuperAdmin", SuperAdminSchema);

export default SuperAdmin;
