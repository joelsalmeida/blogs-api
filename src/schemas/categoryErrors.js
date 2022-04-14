const { statusCode } = require('./statusCodes');
const errorMessage = require('./categoryErrorMessages');

const name = {
  required: {
    code: statusCode.badRequest,
    message: errorMessage.name.required,
  },
};

module.exports = { name };
