import { Request, Response } from "express";
import Student from "../classes/Student";
import dotenv from "dotenv";
import { CustomRequest } from "./authController";
import { UserManager } from "../services/UserManager";

dotenv.config();

export async function getProfile(req: Request, res: Response) {
  try {
    const { email } = (req as CustomRequest).user;

    console.log();

    if (!((req as CustomRequest).user instanceof Student)) {
      return res.status(403).send("You are not a student");
    }
    const userManager = new UserManager();
    const student = await userManager.getUserByEmail(email);
    res.json(student);
  } catch (err) {
    console.log(err);
  }
}
