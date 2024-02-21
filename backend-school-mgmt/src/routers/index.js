import express from "express";
import authRouters from "./auth-routes.js";
import schoolRouters from "./school-routes.js";
const allRouters = express.Router();

allRouters.use("/auth", authRouters);

allRouters.use("/school", schoolRouters);

export default allRouters;
