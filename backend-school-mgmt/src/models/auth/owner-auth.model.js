import mongoose from "mongoose";

const ownerSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      default: "owner",
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
      required: [true, "Phone is required"],
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

const Owner = mongoose.model("Owner", ownerSchema);

export default Owner;
