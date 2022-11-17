import express from "express";
import * as directorController from "../controllers/directorController";
import { authenticateToken } from "../middleware/auth";

const router = express.Router();

router.get("/:id", authenticateToken, directorController.validateCompany);

export default router;
