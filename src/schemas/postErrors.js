const { statusCode } = require('./statusCodes');
const errorMessage = require('./postErrorMessages');

const title = {
  required: {
    code: statusCode.badRequest,
    message: errorMessage.title.required,
  },
};

const content = {
  required: {
    code: statusCode.badRequest,
    message: errorMessage.content.required,
  },
};

const category = {
  required: {
    code: statusCode.badRequest,
    message: errorMessage.category.required,
  },
  invalid: {
    code: statusCode.badRequest,
    message: errorMessage.category.invalid,
  },
};

module.exports = { title, content, category };
