const LoginService = require('../services/LoginService');
const { user } = require('../schemas/loginErrors');

const login = async (req, res, next) => {
  const { email, password } = req.body;
  
  try {
    const token = await LoginService.login(email, password);
    if (!token) return next(user.invalid);
    return res.status(200).json(token);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { login };