const express = require('express');

const router = express.Router();

const UserController = require('../controllers/UserController');

const user = require('../validations/userValidations');
const login = require('../middlewares/authMiddlewares');

router.post(
  '/',
  user.emailValidation, user.nameValidation, user.passwordValidations,
  UserController.createUser,
);

router.get(
  '/',
  login.authMiddleware,
  UserController.getUsers,
);

module.exports = router;
