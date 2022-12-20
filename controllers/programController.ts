import { Request, Response } from 'express';
import dotenv from 'dotenv';
import Internship from '../types/Internship';
import Company from '../types/Company';
import { CustomRequest } from './authController';
import ProgramManager from '../services/ProgramManager';
import Student from '../types/Student';
import { UserManager } from '../services/UserManager';

dotenv.config();

export async function getAllPrograms(
  req: Request,
  res: Response
): Promise<any> {
  try {
    const programManager = new ProgramManager();
    const programs = await programManager.getAllPrograms();
    res.json(programs);
  } catch (err) {
    console.error(err);
    res.status(403);
  }
}

export async function getProgramByid(
  req: Request,
  res: Response
): Promise<any> {
  console.log('req.params.id', req.params.id);

  try {
    const programManager = new ProgramManager();
    const program = await programManager.getProgramId(req.params.id);
    res.json(program);
  } catch (err) {
    console.error(err);
    res.status(403);
  }
}

export async function favoriteProgram(
  req: Request,
  res: Response
): Promise<any> {
  try {
    const student = (req as CustomRequest).user as Student;
    if (!(student instanceof Student)) {
      return res.status(403).send('You are not Student');
    }

    const { id } = req.params;
    const { favorite } = req.body;

    const userManager = new UserManager();
    const programManager = new ProgramManager();
    const program = await programManager.getProgramId(id);

    if (program === null) return res.status(403).send('Program not found');

    if (favorite) {
      student.addFavoriteProgram(program);
      program.addFavoriteStudent(student);
    } else {
      student.removeFavoriteProgram(program);
      program.removeFavoriteStudent(student);
    }
    userManager.save(student);
    programManager.save(program);
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(403);
  }
}

export async function createProgram(req: Request, res: Response): Promise<any> {
  try {
    if (!((req as CustomRequest).user instanceof Company)) {
      return res.status(403).send('You are not a company');
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

    const userManager = new UserManager();
    const companyData = (await userManager.findUserById(id)) as Company;

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

    const internProgram = new Internship(
      '',
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

    const programManager = new ProgramManager();
    const program = await programManager.create(internProgram);

    targetCompany.addProgram(program._id.toString());
    userManager.updateUserById(id, targetCompany);

    res.json(program);
  } catch (err) {
    console.error(err);
    res.status(403);
  }
}

export async function myFavorite(req: Request, res: Response): Promise<any> {
  if (!((req as CustomRequest).user instanceof Student)) {
    return res.status(403).send('You are not a student');
  }

  const student = (req as CustomRequest).user as Student;

  const programManager = new ProgramManager();
  const programs = await programManager.getManyProgram(student.favoriteProgram);

  res.json(programs);
}

export async function mostFavorite(req: Request, res: Response): Promise<any> {
  const programManager = new ProgramManager();
  const programs = await programManager.findAllPrograms();
  programs.sort((a, b) => {
    const A =
      a?.favoriteStudents?.length == null ? 0 : a.favoriteStudents.length;
    const B =
      b?.favoriteStudents?.length == null ? 0 : b.favoriteStudents.length;
    return B - A;
  });

  res.json(programs);
}

export async function issuedProgram(req: Request, res: Response): Promise<any> {
  if (!((req as CustomRequest).user instanceof Company)) {
    return res.status(403).send('You are not a company');
  }

  const company = (req as CustomRequest).user as Company;

  const programManager = new ProgramManager();
  const programs = await programManager.issuedPrograms(company);

  res.json(programs);
}
