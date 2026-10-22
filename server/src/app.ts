import "dotenv/config"; // reads .env into process.env
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import taskRouter from "./routes/taskRoutes";

const app = express(); // to start up th4e server in express.

const PORT = process.env.PORT || 6741;

// CORS: only the Client url address my call this API
app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173/" }));

//  Convcerts every requests to json (javascript format)
app.use(express.json());

// Every endpoint must start with /api/tasks is handled by task router
// .use is an inbuilt middleware (middleman) that can be used to convert, check and validate requests.
app.use("/api/tasks", taskRouter);

const startServer = async () => {
  await mongoose.connect(process.env.MONGO_URL as string);

  console.log("Database connected successfully");

  app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`);
  });
};

startServer();

// oluwaseunraji123_db_user

// yv4JBvPSz6JHMdG5

// mongodb+srv://oluwaseunraji123_db_user:yv4JBvPSz6JHMdG5@cluster0.3gc2bmn.mongodb.net/

// cors: cross origin resource sharing
