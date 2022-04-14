const { Category } = require('../models');

const createCategory = async (name) => {
  try {
    return await Category.create({ name });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createCategory };
