import { Request, Response } from "express";
import Company from "../types/Company";
import dotenv from "dotenv";
import { CustomRequest } from "./authController";
import { UserManager } from "../services/UserManager";

dotenv.config();

export async function getAllCompany(req: Request, res: Response) {
  try {
    const userManager = new UserManager()
    const users = await userManager.getUsers()

    let companies = users.filter(user => {
      return user?.role == 'Company'
    })
    companies.sort((a, b) => {
      const A = a as Company;
      const B = b as Company;
      if(A.validateStatus && ! B.validateStatus) {
        return 1
      }
      else {
        return -1
      }
    })

    res.json(companies)
  }
  catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
}

export async function getProfile(req: Request, res: Response) {
  try {
    const { email } = (req as CustomRequest).user;

    console.log();

    if (!((req as CustomRequest).user instanceof Company)) {
      return res.status(403).send("You are not a student");
    }
    const userManager = new UserManager();
    const company = await userManager.getUserByEmail(email);
    res.json(company);
  } catch (err) {
    console.log(err);
  }
}

export async function updateProfile(req: Request, res: Response) {
  try {
    if (!((req as CustomRequest).user instanceof Company)) {
      return res.status(403).send("You are not a student");
    }

    const {
      id,
      email,
      companyName,
      profilePicture,
      phoneNumber,
      mediaLink,
      location,
    } = req.body;

    const userManager = new UserManager();
    const user = await userManager.findUserById(id);
    if (user === null) {
      return res.send("User not found");
    }

    const company = user as Company;
    const targetCompany = new Company(
      company.userId,
      company.email,
      company.companyName,
      company.issuedProgram,
      company.profilePicture,
      company.phoneNumber,
      company.mediaLink,
      company.location,
      company.password,
      company.salt,
      company.validateStatus
    );

    targetCompany.updateCompanyProfile(
      companyName,
      profilePicture,
      phoneNumber,
      mediaLink,
      location
    );

    userManager.updateUserById(id, targetCompany);
    res.json(targetCompany);
  } catch (err) {
    console.log(err);
  }
}
