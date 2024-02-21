import JWT from "jsonwebtoken";
import { apiResponse } from "../utils/index.js";
import mongoose from "mongoose";

export const verifyUserMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token)
      return apiResponse.error(res, { errorMessage: "Token is required" });

    JWT.verify(token, process.env.TOKEN_SECURITY_KEY, (err, decoded) => {
      if (err) {
        return apiResponse.error(res, { errorMessage: "Invalid token" });
      }
      req.userInfo = decoded;
      next();
    });
  } catch (error) {
    return apiResponse.server(res);
  }
};

export function generateToken(payload) {
  return JWT.sign(payload, process.env.TOKEN_SECURITY_KEY, {
    expiresIn: "10d",
  });
}

export const registerOwnerMiddleware = (req, res, next) => {
  const { name, phone, password, email } = req.body;
  if (!name)
    return apiResponse.error(res, { errorMessage: "Name is required" });
  else if (!phone)
    return apiResponse.error(res, { errorMessage: "Phone is required" });
  else if (!email)
    return apiResponse.error(res, { errorMessage: "Email is required" });
  else if (!password)
    return apiResponse.error(res, { errorMessage: "Password is required" });
  return next();
};

export const loginOwnerMiddleware = (req, res, next) => {
  const { phone, email, password } = req.body;
  if (!phone && !email)
    return apiResponse.error(res, {
      errorMessage: "email or phone is required",
    });
  else if (!password)
    return apiResponse.error(res, { errorMessage: "Password is required" });
  return next();
};

export const validObjectId = (id) => {
  const isValidObjectId = mongoose.Types.ObjectId.isValid(id);
  return isValidObjectId;
};
