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

module.exports = { title, content, category };
