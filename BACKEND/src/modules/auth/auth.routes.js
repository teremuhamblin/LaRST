const express = require('express');
const router = express.Router();
const authController = require('./auth.controller');
const { authenticate, authorize } = require('../../middleware/auth.middleware');

router.post('/login', authController.login);
router.post('/logout', authenticate, authController.logout);
router.get('/me', authenticate, authController.me);

// Création d'un compte réservée à l'admin
router.post('/users', authenticate, authorize('admin'), authController.createUser);

module.exports = router;
