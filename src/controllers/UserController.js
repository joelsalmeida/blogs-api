const UserService = require('../services/UserService');

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

module.exports = { createUser, getUsers };