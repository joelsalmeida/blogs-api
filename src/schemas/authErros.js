const { statusCode } = require('./statusCodes');
const errorMessage = require('./authErrorMessages');

const token = {
  required: {
    code: statusCode.unauthorized,
    message: errorMessage.token.required,
  },
};

const user = { 
  invalid: {
    code: statusCode.unauthorized, 
    message: errorMessage.user.invalid, 
  },
};

module.exports = { token, user };