import { Request, Response } from "express";
import dotenv from "dotenv";
import Company from "../classes/Company";
import { CustomRequest } from "./authController";
import Director from "../classes/Director";
import { UserManager } from "../services/UserManager";

dotenv.config();

export async function validateCompany(req: Request, res: Response) {
  console.log((req as CustomRequest).user);

  try {
    if (!((req as CustomRequest).user.role === "Director")) {
      return res.status(403).send("You are not a director");
    }
    const userManager = new UserManager();
    const { id, validateStatus } = req.body;
    const company = await userManager.findUserById(id);
    const targetCompany = new Company(
      company.email,
      company.companyName,
      null,
      company.profilePicture,
      company.phoneNumber,
      null,
      null,
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
