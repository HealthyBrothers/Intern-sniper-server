import express from "express";
import * as programController from "../controllers/programController";
import { authenticateToken } from "../middleware/auth";

const router = express.Router();

router.get("/", programController.getAllPrograms);

router.get("/:id", programController.getProgramByid);

router.get("/create", authenticateToken, programController.createProgram);

router.get(
  "/createdummy",
  authenticateToken,
  programController.createDummyProgram
);

export default router;
