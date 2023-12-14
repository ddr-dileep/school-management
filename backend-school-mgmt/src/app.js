import express from "express";
import dotenv from "dotenv";
import allRouters from "./routers/index.js";
import cors from "cors";
import dbConnection from "./config/database.js";
const app = express();

const allowedOrigins = ["http://localhost:5173", "http://another-example.com"];
const corsOptions = {
  origin: allowedOrigins,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

// middlewares
dotenv.config();
app.use(express.json());
app.use(cors(corsOptions));

app.use("/api", allRouters);

dbConnection(); // database connection

export default app;
