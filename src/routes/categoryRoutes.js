const express = require('express');

const router = express.Router();

const CategoryController = require('../controllers/CategoryController');

const { authMiddleware } = require('../middlewares/authMiddlewares');

router.post('/', authMiddleware, CategoryController.createCategory);
router.get('/', authMiddleware, CategoryController.getCategories);

module.exports = router;
