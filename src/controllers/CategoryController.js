const CategoryService = require('../services/CategoryService');
const err = require('../schemas/categoryErrors');

const createCategory = async (req, res, next) => {
  const { name } = req.body;
  if (!name) return next(err.name.required);

  try {
    const newCategory = await CategoryService.createCategory(name);
    return res.status(201).json(newCategory);
  } catch (error) {
    console.log(error);
  }
};

const getCategories = async (_req, res) => {
  try {
    const categories = await CategoryService.getCategories();
    return res.status(200).json(categories);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createCategory, getCategories };
