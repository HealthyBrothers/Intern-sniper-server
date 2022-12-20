import { Request, Response } from 'express';
import Student from '../types/Student';
import dotenv from 'dotenv';
import { CustomRequest } from './authController';
import { UserManager } from '../services/UserManager';

dotenv.config();

export async function getProfile(req: Request, res: Response): Promise<any> {
  try {
    const { email } = (req as CustomRequest).user;

    console.log();

    if (!((req as CustomRequest).user instanceof Student)) {
      return res.status(403).send('You are not a student');
    }
    const userManager = new UserManager();
    const student = await userManager.getUserByEmail(email);
    res.json(student);
  } catch (err) {
    console.log(err);
  }
}

export async function updateProfile(req: Request, res: Response): Promise<any> {
  try {
    if (!((req as CustomRequest).user instanceof Student)) {
      return res.status(403).send('You are not a student');
    }

    const {
      id,
      firstName,
      lastName,
      studyingYear,
      interestedField,
      university,
      profilePicture,
      mediaLink,
    } = req.body;

    const userManager = new UserManager();
    const user = await userManager.findUserById(id);
    if (user === null) {
      return res.send('User not found');
    }
    const student = user as Student;
    const targetStudent = new Student(
      student.userId,
      student.email,
      student.firstName,
      student.lastName,
      student.studyingYear,
      student.interestedField,
      student.favoriteProgram,
      student.university,
      student.password,
      student.salt,
      student.mediaLink,
      student.profilePicture
    );

    targetStudent.updateStudentProfile(
      firstName,
      lastName,
      studyingYear,
      interestedField,
      university,
      profilePicture,
      mediaLink
    );

    userManager.updateStudentProfileById(id, targetStudent);
    res.json(targetStudent);
  } catch (err) {
    console.log(err);
  }
}
