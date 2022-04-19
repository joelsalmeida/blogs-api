const user = {
  unauthorized: 'Unauthorized user',
};

const title = {
  required: '"title" is required',
};

const content = {
  required: '"content" is required',
};

const category = {
  required: '"categoryIds" is required',
  invalid: '"categoryIds" not found',
  cantBeEdited: 'Categories cannot be edited',
};

const post = {
  invalid: 'Post does not exist',
};

module.exports = { user, title, content, category, post };
