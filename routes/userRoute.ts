import express from "express";
import * as userController from "../controllers/userController";
import { authenticateToken } from "../middleware/auth";

const router = express.Router();

router.get("/profile", authenticateToken, userController.getProfile);

router.put(
  "/update",
  authenticateToken,
  userController.updateProfile
);

export default router;

