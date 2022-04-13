const express = require('express');

const router = express.Router();

const UserController = require('../controllers/UserController');

const user = require('../validations/userValidations');

router.post(
  '/',
  user.emailValidation, user.nameValidation, user.passwordValidations,
  UserController.createUser,
);

module.exports = router;
