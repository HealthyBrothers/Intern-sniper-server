import { Request, Response } from "express";
import dotenv from "dotenv";
import Company from "../classes/Company";
import { CustomRequest } from "./AuthController";
import Director from "../classes/Director";
import { UserService } from "../services/UserService";

dotenv.config();

export async function validateCompany(req: Request, res: Response) {
  try {
    if (!((req as CustomRequest).user instanceof Director)) {
      return res.status(403).send("You are not a director");
    }
    const userService = new UserService();
    const company = userService.findUserById(req.body.id);
  } catch (err) {
    console.error(err);
    res.status(403);
  }
}
