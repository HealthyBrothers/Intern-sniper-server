import express, { Express, Request, Response, NextFunction } from 'express';

const router = express.Router()
const authController = require('../controllers/authController')

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