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
  cantBeEdited: {
    code: statusCode.badRequest,
    message: errorMessage.category.cantBeEdited,
  },
};

const post = {
  invalid: {
    code: statusCode.notFound,
    message: errorMessage.post.invalid,
  },
};

const user = {
  unauthorized: {
    code: statusCode.unauthorized,
    message: errorMessage.user.unauthorized,
  },
};

module.exports = { user, title, content, category, post };
