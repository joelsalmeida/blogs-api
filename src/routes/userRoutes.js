const express = require('express');

const router = express.Router();

const UserController = require('../controllers/UserController');

const user = require('../validations/userValidations');
const { authMiddleware } = require('../middlewares/authMiddlewares');

router.post(
  '/',
  user.emailValidation, user.nameValidation, user.passwordValidations,
  UserController.createUser,
);

router.get('/', authMiddleware, UserController.getUsers);

router.get('/:id', authMiddleware, UserController.getUserById);

module.exports = router;
