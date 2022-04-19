const jwt = require('jsonwebtoken');
const UserService = require('../services/UserService');
const { user } = require('../schemas/userErrors');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  
  try {
    const token = await UserService.createUser(displayName, email, password, image);
    return res.status(201).json(token);
  } catch (error) {
    console.log(error);
  }
};

const getUsers = async (_req, res) => {
  try {
    const users = await UserService.getUsers();
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
};

const getUserById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const userFound = await UserService.getUserById(id);
    if (!userFound) return next(user.notFound);
    return res.status(200).json(userFound);
  } catch (error) {
    console.log(error);
  }
};

const deleteCurrentUser = async (req, res, _next) => {
  const { authorization } = req.headers;
  const { data: { email } } = jwt.verify(authorization, process.env.JWT_SECRET);

  try {
    await UserService.deleteCurrentUser(email);
    return res.status(204).end();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createUser, getUsers, getUserById, deleteCurrentUser };