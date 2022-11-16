<<<<<<< HEAD
import { Request, Response, NextFunction, response } from "express";
import jwt, { JwtPayload, Secret } from 'jsonwebtoken'
import dotenv from 'dotenv';
import { UserManager } from "../classes/UserManager";
import Student from "../classes/Student";
import { MediaLinkManager } from "../classes/MediaLinkManager";

dotenv.config()

interface CustomRequest extends Request {
  payload: string | JwtPayload
}

interface tokenizeUser {
  email: string
}

const ACCESS_TOKEN: Secret = process.env.ACCESS_TOKEN ?? ''
const userManager = new UserManager()
const mediaLinkManager = new MediaLinkManager()
userManager.initialize()

function generateAccessToken(user: tokenizeUser) {
  return jwt.sign(user, ACCESS_TOKEN, { expiresIn: "1800s" });
}

export function authenticateToken(req: Request, res: Response, next: NextFunction) {
=======
import User from "../classes/User";

import express, { Express, Request, Response, NextFunction } from "express";
const jwt = require("jsonwebtoken");

function generateAccessToken(user: User) {
  // No Typedef waiting for model
  return jwt.sign(user, process.env.ACCESS_TOKEN, { expiresIn: "1800s" });
}

function authenticateToken(req: Request, res: Response, next: NextFunction) {
>>>>>>> model
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

<<<<<<< HEAD
  const payload = jwt.verify(
    token,
    ACCESS_TOKEN
  );
  (req as CustomRequest).payload = payload

  next()
}

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body

    const user = userManager.getUserByEmail(email)
    if(user === null) return res.status(403).send('invalid email address')
    if(! await userManager.validatePassword(user, password)) return res.status(403).send('incorrect password')

    const tokenizeUser: tokenizeUser = { email }
    const token = generateAccessToken(tokenizeUser)
    res.json({ token })
  }
  catch(err) {
    console.error(err)
    res.status(403)
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
    mediaLink 
  } = req.body

  const user = userManager.getUserByEmail(email)
  if(user !== null) {
    return res.status(403).send('This email is already been used.')
  }
  if(password !== confirmPassword) {
    return res.status(403).send('Password and Confirm Password doesn\'t match.')
  }

  if(mediaLink !== null) {
    mediaLinkManager.create(mediaLink)
  }
  userManager.createStudent(req.body)
    .then(response => {
      res.sendStatus(201)
    })
    .catch(err => {
      res.sendStatus(403)
      console.error(err)
    })
}

export async function registerCompany(req: Request, res: Response) {
  const { 
    email,
    password,
    confirmPassword,
    companyName,
    phoneNumber,
    location
  } = req.body

  const user = userManager.getUserByEmail(email)
  if(user !== null) {
    return res.status(403).send('This email is already been used.')
  }
  if(password !== confirmPassword) {
    return res.status(403).send('Password and Confirm Password doesn\'t match.')
  }

  userManager.createCompany(req.body)
    .then(response => {
      res.sendStatus(201)
    })
    .catch(err => {
      res.sendStatus(403)
    })
}
export function logout(req: Request, res: Response) {
  //
}

export function me(req: Request, res: Response) {
  const { email } = (req as CustomRequest).payload as tokenizeUser
  const user = userManager.getUserByEmail(email)

  res.json({ name: user?.getName(), email: user?.email, role: user?.role, profilePicture: user?.profilePicture })
}
=======
  jwt.verify(
    token,
    process.env.ACCESS_TOKEN as string,
    (err: Error, user: User) => {
      console.log(err);

      if (err) return res.sendStatus(403);

      // req.user = user;

      next();
    }
  );
}

function login(req: Request, res: Response) {
  // Pretent login successfully and get the user
  const user = { username: "melon" };
  // const token = generateAccessToken(user);
  // res.json({ token });
}

function register(req: Request, res: Response) {
  //
}

function logout(req: Request, res: Response) {
  //
}

function me(req: Request, res: Response) {
  //
}

module.exports = {
  authenticateToken,
  login,
  register,
  logout,
  me,
};
>>>>>>> model
