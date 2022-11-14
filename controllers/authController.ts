import User from "../classes/User";

import express, { Express, Request, Response, NextFunction } from "express";
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
