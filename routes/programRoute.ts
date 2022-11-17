import express from "express";
import * as programController from "../controllers/programController";

const router = express.Router();

router.get("/", programController.getAllPrograms);

router.get("/:id", programController.getProgramByid);

router.get("/create", programController.createProgram);

router.get("/createdummy", programController.createDummyProgram);

export default router;
