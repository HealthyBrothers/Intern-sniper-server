import { Request, Response, NextFunction, response } from "express";
import jwt, { JwtPayload, Secret } from "jsonwebtoken";
import dotenv from "dotenv";
import { UserManager } from "../services/UserManager";
import User from "../types/User";
import Student from "../types/Student";
import Company from "../types/Company";

dotenv.config();

export interface CustomRequest extends Request {
  user: User;
}

export interface tokenizeUser {
  email: String;
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
    if (user === null) return res.status(403).send({
      message: "Invalid email address"
    });
    if (!user.vaildatePassword(password))
      return res.status(403).send({
        message: "Incorrect password"
      });

    const tokenizeUser: tokenizeUser = { email };
    const token = generateAccessToken(tokenizeUser);
    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(403);
  }
}

export async function preRegister(req: Request, res: Response) {
  const { email, password, confirmPassword } = req.body

  const user = await userManager.getUserByEmail(email);
  if (user !== null) {
    return res.status(403).send({
      message: "This email is already been used."
    });
  }
  if (password !== confirmPassword) {
    return res.status(403).send({
      message: "Password and Confirm Password doesn't match."
    });
  }

  res.sendStatus(200)
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
    profilePicture
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
    [],
    university,
    password,
    null,
    mediaLinks,
    profilePicture
  );

  userManager
    .create(newStudent)
    .then((response) => {
      res.sendStatus(201);
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
    profilePicture
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
    [],
    profilePicture,
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
    id: user.userId,
    name: user.getName(),
    email: user.email,
    role: user.role,
    profilePicture: user.profilePicture,
  });
}
