const { isAbsent, isEmpty } = require('./genericValidations');
const error = require('../schemas/loginErrors');

const emailValidation = async (req, _res, next) => {
  const { email } = req.body;

  switch (true) {
    case isEmpty(email):
      next(error.email.empty);
      break;   
    case isAbsent(email):
      next(error.email.required);
      break;
    default:
      next();
      break;
  }
};

const passwordValidations = (req, _res, next) => {
  const { password } = req.body;

  switch (true) {
    case isEmpty(password):
      next(error.password.empty);
      break;
    case isAbsent(password):
      next(error.password.required);
      break;
    default:
      next();
      break;
  }
};

module.exports = { emailValidation, passwordValidations };