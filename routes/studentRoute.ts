import express from "express";
import * as studentController from "../controllers/studentController";
import { authenticateToken } from "../middleware/auth";

const router = express.Router();

router.get("/profile", authenticateToken, studentController.getProfile);

export default router;
