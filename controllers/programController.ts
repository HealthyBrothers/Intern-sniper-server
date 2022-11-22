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
  console.log("req.params.id", req.params.id);

  try {
    const programManager = new ProgramManager();
    const program = await programManager.getProgramId(req.params.id);
    res.json(program);
  } catch (err) {
    console.error(err);
    res.status(403);
  }
}

export async function favoriteProgram(req: Request, res: Response) {
  try {
    const student = (req as CustomRequest).user as Student;
    if (!(student instanceof Student)) {
      return res.status(403).send("You are not Student");
    }

    const { id } = req.params;

    const userManager = new UserManager();
    const programManager = new ProgramManager();
    const program = await programManager.getProgramId(id);

    if (program === null) return res.status(403).send("Program not found");
    else {
      student.addFavoriteProgram(program);
      program.addFavoriteStudent(student);
      userManager.save(student);
      programManager.save(program);
    }
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(403);
  }
}

export async function uploadSignleImage(req: Request, res: Response) {}

export async function createProgram(req: Request, res: Response) {
  try {
    if (!((req as CustomRequest).user instanceof Company)) {
      return res.status(403).send("You are not a company");
    }
    const {
      id,
      programId,
      programName,
      timeline,
      programPicture,
      programWebsite,
      favoriteStudents,
      relatedField,
      programType,
      paid,
    } = req.body;

    console.log("req.body", req.body);

    const userManager = new UserManager();
    const companyData = (await userManager.findUserById(id)) as Company;
    console.log("companyData", companyData);

    const targetCompany = new Company(
      id,
      companyData.email,
      companyData.companyName,
      companyData.issuedProgram,
      companyData.profilePicture,
      companyData.phoneNumber,
      companyData.mediaLink,
      companyData.location,
      companyData.password,
      companyData.salt,
      companyData.validateStatus
    );
    console.log("theOwner5", companyData);

    const intern_program = new Internship(
      "",
      programName,
      companyData,
      timeline,
      programPicture,
      programWebsite,
      favoriteStudents,
      relatedField,
      programType,
      paid
    );
    console.log("intern_program", intern_program);

    const programManager = new ProgramManager();
    const program = await programManager.create(intern_program);

    targetCompany.addProgram(program._id.toString());
    userManager.updateUserById(id, targetCompany);

    res.json(program);
  } catch (err) {
    console.error(err);
    res.status(403);
  }
}
