import dotenv from "dotenv";
import { Request, Response } from "express";
import { UserManager } from "../services/UserManager";
import Company from "../types/Company";
import Student from "../types/Student";
import { CustomRequest } from "./authController";

dotenv.config()

export async function getProfile(req: Request, res: Response) {
  try {
    const userManager = new UserManager();

    const { id } = req.params
    const user = await userManager.getUserById(id);
    if (user === null) return res.status(403).send({
      message: 'Can\'t find user by userId: ' + id
    })
    res.json(user);
  } catch (err) {
    console.log(err);
    res.sendStatus(403)
  }
}

export function updateProfile(req: Request, res: Response) {
  try {
    const { id } = req.params
    const userManager = new UserManager()
    const user = (req as CustomRequest).user

    if(id !== user.userId) return res.sendStatus(401)

    if (user instanceof Student) {
      const {
        firstName,
        lastName,
        studyingYear,
        interestedField,
        university,
        profilePicture,
        mediaLink,
      } = req.body;

      const student = user as Student
      student.updateStudentProfile(firstName, lastName, studyingYear, interestedField, university, profilePicture, mediaLink)
      userManager.save(student)
    }
    else if(user instanceof Company) {
      const {
      companyName,
      profilePicture,
      phoneNumber,
      mediaLink,
      location,
      } = req.body

      const company = user as Company
      company.updateCompanyProfile(companyName, profilePicture, phoneNumber, mediaLink, location)
      userManager.save(company)
    }

    res.sendStatus(200)
  }
  catch (err) {
    console.log(err)
  }
}
