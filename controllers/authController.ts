import { Request, Response, NextFunction, response } from "express";
import jwt, { JwtPayload, Secret } from "jsonwebtoken";
import dotenv from "dotenv";
import { UserManager } from "../services/UserManager";
import User from "../classes/User";
import Student from "../classes/Student";
import Company from "../classes/Company";

dotenv.config();

export interface CustomRequest extends Request {
  user: User;
}

export interface tokenizeUser {
  email: string;
}

const ACCESS_TOKEN: Secret = process.env.ACCESS_TOKEN ?? "";
const userManager = new UserManager();

function generateAccessToken(user: tokenizeUser) {
  return jwt.sign(user, ACCESS_TOKEN, { expiresIn: "1800s" });
}

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    const user = await userManager.getUserByEmail(email);
    if (user === null) return res.status(403).send("invalid email address");
    if (!user.vaildatePassword(password))
      return res.status(403).send("incorrect password");

    const tokenizeUser: tokenizeUser = { email };
    const token = generateAccessToken(tokenizeUser);
    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(403);
  }
}

export async function registerStudent(req: Request, res: Response) {
  const {
    email,
    password,
    confirmPassword,
    firstName,
    lastName,
    studyingYear,
    interestedField,
    university,
    mediaLinks,
  } = req.body;

  const user = await userManager.getUserByEmail(email);
  if (user !== null) {
    return res.status(403).send("This email is already been used.");
  }
  if (password !== confirmPassword) {
    return res.status(403).send("Password and Confirm Password doesn't match.");
  }

  const newStudent = new Student(
    null,
    email,
    firstName,
    lastName,
    studyingYear,
    interestedField,
    null,
    university,
    password,
    null,
    mediaLinks,
    "profilePicture"
  );

  userManager
    .create(newStudent)
    .then((response) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(403);
    })
    .catch((err) => {
      res.sendStatus(403);
      console.error(err);
    });
}

export async function registerCompany(req: Request, res: Response) {
  const {
    email,
    password,
    confirmPassword,
    companyName,
    phoneNumber,
    location,
    mediaLinks,
  } = req.body;

  const user = await userManager.getUserByEmail(email);
  if (user !== null) {
    return res.status(403).send("This email is already been used.");
  }
  if (password !== confirmPassword) {
    return res.status(403).send("Password and Confirm Password doesn't match.");
  }

  const newCompany = new Company(
    null,
    email,
    companyName,
    null,
    "profilePicture",
    phoneNumber,
    mediaLinks,
    location,
    password,
    null,
    false
  );

  userManager
    .create(newCompany)
    .then((response) => {
      res.sendStatus(201);
    })
    .then((response) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(403);
    });
}
export function logout(req: Request, res: Response) {
  //
}

export async function me(req: Request, res: Response) {
  const user = (req as CustomRequest).user;

  res.json({
    name: user?.getName(),
    email: user?.email,
    role: user?.role,
    profilePicture: user?.profilePicture,
  });
}
