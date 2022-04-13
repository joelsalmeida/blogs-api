const user = { invalid: 'Invalid fields' };

const email = {
  required: '"email" is required',
  empty: '"email" is not allowed to be empty',
};

const password = {
  required: '"password" is required',
  empty: '"password" is not allowed to be empty',
};

module.exports = { user, email, password };