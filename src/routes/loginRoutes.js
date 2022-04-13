const express = require('express');

const router = express.Router();

const LoginController = require('../controllers/LoginController');

const login = require('../validations/loginValidations');

router.post(
  '/',
  login.emailValidation, login.passwordValidations,
  LoginController.login,
);

module.exports = router;
