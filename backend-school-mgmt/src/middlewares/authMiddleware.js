import JWT from "jsonwebtoken";
import { apiResponse } from "../utils/index.js";
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

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

export const registerMiddleware = (req, res, next) => {
  const { role, password, email, uniqueId } = req.body;
  if (!role)
    return apiResponse.error(res, { errorMessage: "Role is required" });
  else if (!password)
    return apiResponse.error(res, { errorMessage: "Password is required" });
  if (role == "admin" || "superAdmin") {
    if (!email) {
      return apiResponse.error(res, { errorMessage: "Email is required" });
    } else if (!emailRegex.test(email)) {
      return apiResponse.error(res, {
        errorMessage: "Enter valid email address",
      });
    }
  } else if (role !== "admin" || "superAdmin") {
    if (!uniqueId)
      return apiResponse.error(res, { errorMessage: "Unique ID is required" });
  }

  return next();
};

export const loginMiddleware = (req, res, next) => {
  const { password, email, uniqueId } = req.body;
  if (!uniqueId && !email)
    return apiResponse.error(res, { errorMessage: "Username is required" });
  else if (!password)
    return apiResponse.error(res, { errorMessage: "Password is required" });
  return next();
};
