import { Request, Response } from "express";
import dotenv from "dotenv";
import Internship from "../classes/Internship";
import Company from "../classes/Company";
import { CustomRequest } from "./authController";
import ProgramManager from "../services/ProgramManager";
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
    const {
      id,
      programName,
      timeline,
      programPicture,
      programWebsite,
      favoriteStudents,
      relatedField,
      programType,
      paid,
    } = req.body;

    const userManager = new UserManager();
    const companyData = (await userManager.findUserById(id)) as Company;
    console.log("companyData", companyData);

    const targetCompany = new Company(
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
    console.log("theOwner5", targetCompany);

    const intern_program = new Internship(
      programName,
      targetCompany,
      timeline,
      programPicture,
      programWebsite,
      favoriteStudents,
      relatedField,
      programType,
      paid
    );

    targetCompany.addProgram("6378cf9747fdd3d008f4f603");
    console.log("updatedCompany", targetCompany);
    userManager.updateUserById(id, targetCompany);

    const programManager = new ProgramManager();
    const program = await programManager.createProgram(intern_program);

    res.json(program);
  } catch (err) {
    console.error(err);
    res.status(403);
  }
}
