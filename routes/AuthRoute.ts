import express, { Express, Request, Response, NextFunction } from 'express';
import * as authController from '../controllers/AuthController';

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
  authController.authenticateToken,
  authController.logout
)

router.post('/me',
  authController.authenticateToken,
  authController.me
)

export default router
