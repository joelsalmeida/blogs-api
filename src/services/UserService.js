const jwt = require('jsonwebtoken');
const { User } = require('../models');

const emailAlreadyRegistered = async (email) => {
  try {
    const registered = await User.findOne({ where: { email } });
    if (registered) return true;
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (displayName, email, password, image) => {
  try {
    await User.create({ displayName, email, password, image });

    const createdUser = { displayName, email, password, image };
    const jwtConfig = { algorithm: 'HS256' };
    const token = jwt.sign({ data: createdUser }, process.env.JWT_SECRET, jwtConfig);

    return { token };
  } catch (error) {
    console.log(error);
  }
};

const getUsers = async () => {
  try {
    return await User.findAll();
  } catch (error) {
    console.log(error);
  }
};

const getUserById = async (id) => {
  try {
    return await User.findOne({ where: { id } });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createUser, getUsers, getUserById, emailAlreadyRegistered };
