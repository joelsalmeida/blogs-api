const jwt = require('jsonwebtoken');
require('dotenv').config();

const { User } = require('../models');
const err = require('../schemas/authErros');

const authMiddleware = async (req, _res, next) => {
  const { authorization } = req.headers;
  if (!authorization) next(err.token.required);

  try {
    const { data: { email, password } } = jwt.verify(authorization, process.env.JWT_SECRET);
    const registered = await User.findOne({ where: { email, password } });
    
    if (registered) return next();
  } catch (error) {
    console.log(error);
    return next(err.user.invalid);
  }
};

module.exports = { authMiddleware };