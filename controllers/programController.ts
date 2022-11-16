import { Request, Response } from "express";
import dotenv from "dotenv";
import Internship from "../classes/Internship";
import Company from "../classes/Company";
import ProgramManager from "../services/ProgramManager";

dotenv.config();

export async function getPrograms(req: Request, res: Response) {
  try {
    // const programManager = new ProgramManager();
    // const programs = await programManager.getProgramByName(req.body.name);
    // res.json(programs);

    res.send("Program get");
  } catch (err) {
    console.error(err);
    res.status(403);
  }
}

export async function createProgram(req: Request, res: Response) {
  try {
    // const aCompany = await new Company(
    //   "company@gmail.com",
    //   "A Company",
    //   null,
    //   "profileUrl",
    //   "00000",
    //   null,
    //   null,
    //   "password"
    // );

    // const programManager = new ProgramManager();
    // const program = await programManager.createProgram(req.body);
    // res.json(program);

    res.send("Program created");
  } catch (err) {
    console.error(err);
    res.status(403);
  }
}
