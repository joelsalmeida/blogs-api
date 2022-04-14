const { statusCode } = require('./statusCodes');
const errorMessage = require('./userErrorMessages');

const user = {
  notFound: {
    code: statusCode.notFound,
    message: errorMessage.user.notFound,
  },
};

const email = {
  required: {
    code: statusCode.badRequest,
    message: errorMessage.email.required,
  },
  invalid: {
    code: statusCode.badRequest,
    message: errorMessage.email.invalid,
  },
  alreadyRegistered: {
    code: statusCode.conflict,
    message: errorMessage.email.alreadyRegistered,
  },
};

const name = { 
  length: {
    code: statusCode.badRequest, 
    message: errorMessage.name.charactersLong, 
  },
};

const password = { 
  required: {
    code: statusCode.badRequest, 
    message: errorMessage.password.required, 
  },
  length: {
    code: statusCode.badRequest,
    message: errorMessage.password.charactersLong,
  },
};

module.exports = { user, email, name, password };