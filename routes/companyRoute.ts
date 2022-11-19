import express from "express";
import * as companyController from "../controllers/companyController";
import { authenticateToken } from "../middleware/auth";

const router = express.Router();

router.get("/profile", authenticateToken, companyController.getProfile);

router.post(
  "/profile/update",
  authenticateToken,
  companyController.updateProfile
);

export default router;
