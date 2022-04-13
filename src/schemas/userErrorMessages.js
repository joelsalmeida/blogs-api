const name = {
  charactersLong: '"displayName" length must be at least 8 characters long',
};

const email = {
  alreadyRegistered: 'User already registered',
  required: '"email" is required',
  invalid: '"email" must be a valid email',
};

const password = {
  required: '"password" is required',
  charactersLong: '"password" length must be 6 characters long',
};

module.exports = { name, email, password };