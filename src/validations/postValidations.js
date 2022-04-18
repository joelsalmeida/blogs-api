const { Op } = require('sequelize');
const err = require('../schemas/postErrors');
const { Category } = require('../models');

const titleValidation = (req, _res, next) => {
  const { title } = req.body;
  if (!title) return next(err.title.required);
  next();
};

const contentValidation = (req, _res, next) => {
  const { content } = req.body;
  if (!content) return next(err.content.required);
  next();
};

const categoryValidation = async (req, _res, next) => {
  const { categoryIds } = req.body;
  if (!categoryIds) return next(err.category.required);

  const { count } = await Category.findAndCountAll({
    where: { id: { [Op.or]: categoryIds } },
  });  
  const someCategoryNotFound = (count !== categoryIds.length);
  
  if (someCategoryNotFound) return next(err.category.invalid);
  next();
};

module.exports = { titleValidation, contentValidation, categoryValidation };
