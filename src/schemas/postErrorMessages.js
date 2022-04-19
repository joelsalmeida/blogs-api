const title = {
  required: '"title" is required',
};

const content = {
  required: '"content" is required',
};

const category = {
  required: '"categoryIds" is required',
  invalid: '"categoryIds" not found',
};

const post = {
  invalid: 'Post does not exist',
};

module.exports = { title, content, category, post };
