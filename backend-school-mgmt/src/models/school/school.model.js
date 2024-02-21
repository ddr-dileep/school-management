import mongoose from "mongoose";

const schoolSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      unique: [true, "Name must be unique"],
    },
    description: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Name is required"],
      unique: [true, "Email is already registered"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      unique: [true, "Phone is already registered"],
    },
    address: {
      type: String,
      required: [true, "Address is required"],
    },
    logo: {
      type: String,
      required: [true, "Logo is required"],
      default:
        "https://seeklogo.com/images/E/education-college-school-logo-289049824A-seeklogo.com.png",
    },
    images: [{}],
    uniqueId: {
      type: String,
      required: [true, "Id is required"],
      unique: [true, "ID is already registered"],
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Owner",
      required: [true, "Owner is required"],
    },
  },
  {
    timestamps: true,
  }
);

const School = mongoose.model("School", schoolSchema);

export default School;
