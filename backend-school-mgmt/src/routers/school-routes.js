import express from "express";
import { schoolController } from "../controllers/index.js";
import { createSchoolMiddlewares } from "../middlewares/schoolMiddlewares.js";
import { verifyUserMiddleware } from "../middlewares/authMiddleware.js";

const schoolRouters = express.Router();

schoolRouters.post(
  "/create-school",
  createSchoolMiddlewares,
  verifyUserMiddleware,
  schoolController.createSchool
);

schoolRouters.get(
  "/get-all-school",
  verifyUserMiddleware,
  schoolController.getSchools
);

schoolRouters.get("/get-one-school/:id", schoolController.getOneSchool);

schoolRouters.put(
  "/update-one-school/:id",
  createSchoolMiddlewares,
  verifyUserMiddleware,
  schoolController.updateSchool
);

export default schoolRouters;
