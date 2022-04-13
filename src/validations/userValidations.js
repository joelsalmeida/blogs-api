const { isAbsent, lengthLess, emailInvalid } = require('./genericValidations');
const error = require('../schemas/userErrors');
const { emailAlreadyRegistered } = require('../services/UserService');

const nameValidation = (req, _res, next) => {
  const { displayName } = req.body;

  switch (true) {
    case lengthLess(8, displayName):
      next(error.name.length);
      break;
    default:
      next();
      break;
  }
};

const emailValidation = async (req, _res, next) => {
  const { email } = req.body;

  switch (true) {
    case await emailAlreadyRegistered(email):
      next(error.email.alreadyRegistered);
      break;    
    case isAbsent(email):
      next(error.email.required);
      break;
    case emailInvalid(email):
      next(error.email.invalid);
      break;
    default:
      next();
      break;
  }
};

const passwordValidations = (req, _res, next) => {
  const { password } = req.body;

  switch (true) {
    case isAbsent(password):
      next(error.password.required);
      break;
    case lengthLess(6, password):
      next(error.password.length);
      break;
    default:
      next();
      break;
  }
};

module.exports = { nameValidation, emailValidation, passwordValidations };
