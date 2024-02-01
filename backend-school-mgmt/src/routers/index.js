import express from "express";
import authRouters from "./auth-routes.js";
const allRouters = express.Router();

allRouters.use("/auth", authRouters);

export default allRouters;
