import express from "express";
import { authController } from "./../controllers/index.js";
import {
  loginMiddleware,
  registerMiddleware,
  verifyUserMiddleware,
} from "../middlewares/authMiddleware.js";

const authRouters = express.Router();

authRouters.post("/register", registerMiddleware, authController.register);

authRouters.post("/login", loginMiddleware, authController.login);

authRouters.get(
  "/get-details",
  verifyUserMiddleware,
  authController.getUserInfo
);

authRouters.put("/update", verifyUserMiddleware, authController.update);

authRouters.delete("/delete", verifyUserMiddleware, authController.delete);

authRouters.post("/logout", verifyUserMiddleware, authController.logout);

export default authRouters;
