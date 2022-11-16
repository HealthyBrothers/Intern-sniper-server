import express from "express";
import * as programController from "../controllers/programController";

const router = express.Router();

router.get("/", programController.getPrograms);

router.get("/create", programController.createProgram);

export default router;
