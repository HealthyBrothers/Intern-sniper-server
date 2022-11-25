import express, { Express, Request, Response } from "express";
import programRoute from "./routes/programRoute";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from 'cors'
import authRoute from "./routes/authRoute";
import directorRoute from "./routes/directorRoute";
import studentRoute from "./routes/studentRoute";
import companyRoute from "./routes/companyRoute";
import imageRoute from "./routes/imageRoute";
import userRoute from "./routes/userRoute"

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());

app.use(express.json());

// connect db
mongoose.connect(process.env.MONGO_URI ?? "");

// app routes
app.use("/auth", authRoute);
app.use("/programs", programRoute);
app.use("/users", userRoute);
app.use("/director", directorRoute);
app.use("/student", studentRoute);
app.use("/company", companyRoute);
app.use("/image", imageRoute);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
