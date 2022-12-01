import { Request, Response } from "express";
import dotenv from "dotenv";
import Director from "../types/Director";
import Company from "../types/Company";
import { CustomRequest } from "./authController";
import { UserManager } from "../services/UserManager";
import ApprovalTx from "../types/ApprovalTx";

dotenv.config();

export async function validateCompany(req: Request, res: Response) {
  try {
    if (!((req as CustomRequest).user.role === "Director")) {
      return res.status(403).send("You are not a director");
    }
    const { directorId, companyId, validateStatus, timestamp } = req.body;
    const userManager = new UserManager();
    const directorData = await userManager.findUserById(directorId);

    const director = new Director(
      directorId,
      directorData.email,
      directorData.firstName,
      directorData.lastName,
      directorData.transactions,
      directorData.password,
      directorData.salt,
      directorData.mediaLink,
      directorData.profilePicture
    );

    const company = await userManager.findUserById(companyId);

    const targetCompany = new Company(
      companyId,
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
    userManager.updateUserById(companyId, targetCompany);

    const newTransaction = new ApprovalTx(companyId, validateStatus, timestamp);

    console.log("newTransaction", newTransaction);

    director.addTransaction(newTransaction);
    userManager.updateUserById(directorId, director);

    res.json(director);
  } catch (err) {
    console.error(err);
    res.status(403);
  }
}
