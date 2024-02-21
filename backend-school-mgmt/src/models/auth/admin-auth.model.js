import mongoose from "mongoose";

const SuperAdminSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      default: "superAdmin",
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
    phone: {
      type: String,
      unique: [true, "Phone is already registered"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    schools: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "School",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const SuperAdmin = mongoose.model("Admin", SuperAdminSchema);

export default SuperAdmin;
