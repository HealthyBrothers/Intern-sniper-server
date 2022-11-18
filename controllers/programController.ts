import { Request, Response } from "express";
import dotenv from "dotenv";
import Internship from "../classes/Internship";
import Company from "../classes/Company";
import { CustomRequest } from "./authController";
import ProgramManager from "../services/ProgramManager";
import Student from "../classes/Student";
import { UserManager } from "../services/UserManager";

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
    if (!((req as CustomRequest).user instanceof Company)) {
      return res.status(403).send("You are not a company");
    }
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
      null,
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

export async function favoriteProgram(req: Request, res: Response) {
  try {
    const student = (req as CustomRequest).user as Student
    if(! (student instanceof Student)) {
      return res.status(403).send('You are not Student')
    }

    const { id } = req.params

    const userManager = new UserManager()
    const programManager = new ProgramManager()
    const program = await programManager.getProgramId(id)

    if(program === null) return res.status(403).send('Program not found')
    else {
      student.addFavoriteProgram(program)
      program.addFavoriteStudent(student)
      userManager.save(student)
      programManager.save(program)
    }
    res.sendStatus(200)
  }
  catch(err) {
    console.log(err)
    res.sendStatus(403)
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
