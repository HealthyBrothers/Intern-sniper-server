import express from "express";
import * as programController from "../controllers/programController";
import { authenticateToken } from "../middleware/auth";

const router = express.Router();

router.get("/", programController.getAllPrograms);

router.get("/:id", programController.getProgramByid);

router.post("/create", authenticateToken, programController.createProgram);

router.post("/favorite/:id", authenticateToken, programController.favoriteProgram);

router.get(
  "/createdummy",
  authenticateToken,
  programController.createDummyProgram
);

export default router;
