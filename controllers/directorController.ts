import { Request, Response } from "express";
import dotenv from "dotenv";
import Company from "../classes/Company";
import { CustomRequest } from "./authController";
import { UserManager } from "../services/UserManager";

dotenv.config();

export async function validateCompany(req: Request, res: Response) {
  try {
    if (!((req as CustomRequest).user.role === "Director")) {
      return res.status(403).send("You are not a director");
    }
    const userManager = new UserManager();
    const { id, validateStatus, timestamp } = req.body;
    const company = await userManager.findUserById(id);
    const targetCompany = new Company(
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
    targetCompany.setValidateStatus(validateStatus);
    userManager.updateUserById(id, targetCompany);

    res.json(targetCompany);
  } catch (err) {
    console.error(err);
    res.status(403);
  }
}
