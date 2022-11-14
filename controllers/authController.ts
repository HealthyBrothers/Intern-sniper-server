import User from "../classes/User";

import express, { Express, Request, Response, NextFunction } from "express";
import Student from "../classes/Student";
import { ifError } from "assert";
const jwt = require("jsonwebtoken");

function generateAccessToken(user: User) {
  // No Typedef waiting for model
  return jwt.sign(user, process.env.ACCESS_TOKEN, { expiresIn: "1800s" });
}

function authenticateToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

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

function registerStudent(req: Request, res: Response) {
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
  const user = Student.getModel().findOne({ 'email': email })
  if(user === null) {
    res.send('This email is already been used.').status(403)
  }
  if(password !== confirmPassword) {
    res.send('Password and Confirm Password doesn\'t match.').status(403)
  }
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
