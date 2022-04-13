const { statusCode } = require('./statusCodes');
const errorMessage = require('./loginErrorMessages');

const user = { 
  invalid: {
    code: statusCode.badRequest, 
    message: errorMessage.user.invalid, 
  },
};

const email = {
  required: {
    code: statusCode.badRequest,
    message: errorMessage.email.required,
  },
  empty: {
    code: statusCode.badRequest,
    message: errorMessage.email.empty,
  },
};

const password = { 
  required: {
    code: statusCode.badRequest, 
    message: errorMessage.password.required, 
  },
  empty: {
    code: statusCode.badRequest,
    message: errorMessage.password.empty,
  },
};

module.exports = { user, email, password };