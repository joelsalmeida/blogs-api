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

const post = {
  invalid: {
    code: statusCode.notFound,
    message: errorMessage.post.invalid,
  },
};

module.exports = { title, content, category, post };
