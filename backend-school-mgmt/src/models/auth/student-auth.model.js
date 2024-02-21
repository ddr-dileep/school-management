import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
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
    uniqueId: {
      type: String,
      required: [true, "Id is required"],
      unique: [true, "ID is already registered"],
    },
    school: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "School",
      required: [true, "School is required"],
    },
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model("Studnet", studentSchema);

export default Student;
