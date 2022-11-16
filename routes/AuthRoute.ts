import express, { Express, Request, Response, NextFunction } from 'express';
<<<<<<< HEAD
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
=======

const router = express.Router()
const authController = require('../controllers/AuthController')

router.post('/login', 
    authController.login
)

router.post('/register', 
    authController.register
)

router.post('/logout', 
    authController.authenticateToken,
    authController.logout
)

router.post('/me', 
    authController.authenticateToken,
    authController.me
)

module.exports = router
>>>>>>> model
