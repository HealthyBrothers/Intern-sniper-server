import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import jwt, { JwtPayload, Secret } from "jsonwebtoken";

dotenv.config();
interface CustomRequest extends Request {
  payload: string | JwtPayload;
}

const ACCESS_TOKEN: Secret = process.env.ACCESS_TOKEN ?? "";

export function authenticateToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  const payload = jwt.verify(token, ACCESS_TOKEN);
  (req as CustomRequest).payload = payload;

  next();
}
