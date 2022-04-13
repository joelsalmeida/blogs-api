const jwt = require('jsonwebtoken');
const { User } = require('../models');

const login = async (email, password) => {
  try {
    const registeredUser = await User.findOne({ where: { email, password } });

    if (registeredUser) {
      const jwtConfig = { algorithm: 'HS256' };
      const token = jwt.sign({ data: { email, password } }, process.env.JWT_SECRET, jwtConfig);
      return { token };
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { login };
