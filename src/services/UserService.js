const jwt = require('jsonwebtoken');
const { User } = require('../models');

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

module.exports = { createUser };
