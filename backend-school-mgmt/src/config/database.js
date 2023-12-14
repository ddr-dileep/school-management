import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    const dbLink = process.env.DATABASE_SECURITY_URL?.replace(
      "<password>",
      process.env.DATABASE_SECURITY_KEY
    );
    await mongoose.connect(dbLink);
    console.log("Connected to database successfully");
  } catch (e) {
    console.log("Error in connecting the database", e);
  }
};

export default dbConnection;
