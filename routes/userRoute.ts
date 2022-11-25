import express from "express";
import * as userController from "../controllers/userController";
import { authenticateToken } from "../middleware/auth";

const router = express.Router();

router.get("/:id", userController.getProfile);

router.put(
  "/update/:id",
  authenticateToken,
  userController.updateProfile
);

export default router;

