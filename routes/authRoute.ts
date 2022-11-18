import express, { Express, Request, Response, NextFunction } from 'express';
import * as authController from '../controllers/authController';
import { authenticateToken } from "../middleware/auth";

const router = express.Router()

router.post('/login',
  authController.login
)

router.post('/register/student',
  authController.registerStudent
)

router.post('/register/company',
  authController.registerCompany
)

router.post('/logout',
  authenticateToken,
  authController.logout
)

router.post('/me',
  authenticateToken,
  authController.me
)

export default router
