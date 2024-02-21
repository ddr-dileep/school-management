import express from "express";
import { authController } from "./../controllers/index.js";
import {
  loginOwnerMiddleware,
  registerOwnerMiddleware,
  verifyUserMiddleware,
} from "../middlewares/authMiddleware.js";

const authRouters = express.Router();

authRouters.post(
  "/register-owner",
  registerOwnerMiddleware,
  authController.registerOwner
);

authRouters.post(
  "/login-owner",
  loginOwnerMiddleware,
  authController.loginOwner
);

authRouters.get(
  "/get-owner-info",
  verifyUserMiddleware,
  authController.getOwnerInfo
);

authRouters.put(
  "/update-owner-info",
  registerOwnerMiddleware,
  verifyUserMiddleware,
  authController.updateOwnerInfo
);

export default authRouters;
