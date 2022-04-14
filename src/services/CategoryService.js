const { Category } = require('../models');

const createCategory = async (name) => {
  try {
    return await Category.create({ name });
  } catch (error) {
    console.log(error);
  }
};

const getCategories = async () => {
  try {
    return await Category.findAll();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createCategory, getCategories };
