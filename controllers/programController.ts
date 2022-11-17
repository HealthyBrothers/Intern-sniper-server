import { Request, Response } from "express";
import dotenv from "dotenv";
import Internship from "../classes/Internship";
import Company from "../classes/Company";
import { CustomRequest } from "./AuthController";
import ProgramManager from "../services/ProgramManager";
import Timeline from "../classes/Timeline";

dotenv.config();

export async function getAllPrograms(req: Request, res: Response) {
  try {
    const programManager = new ProgramManager();
    const programs = await programManager.getAllPrograms();
    res.json(programs);
  } catch (err) {
    console.error(err);
    res.status(403);
  }
}

export async function getProgramByid(req: Request, res: Response) {
  try {
    const programManager = new ProgramManager();
    const program = await programManager.getProgramId(req.params.id);
    res.json(program);
  } catch (err) {
    console.error(err);
    res.status(403);
  }
}

export async function createProgram(req: Request, res: Response) {
  try {
    const ownerOfProgram = (req as CustomRequest).user;

    const {
      programName,
      timeline,
      programPicture,
      programWebsite,
      favoriteStudents,
      relatedField,
      programType,
      paid,
    } = req.body;

    const intern_program = new Internship(
      programName,
      ownerOfProgram as Company,
      timeline,
      programPicture,
      programWebsite,
      favoriteStudents,
      relatedField,
      programType,
      paid
    );

    const programManager = new ProgramManager();
    const program = await programManager.createProgram(intern_program);
    res.json(program);
  } catch (err) {
    console.error(err);
    res.status(403);
  }
}

export async function createDummyProgram(req: Request, res: Response) {
  try {
    res.send("Dummy program created");
  } catch (err) {
    console.error(err);
    res.status(403);
  }
}
