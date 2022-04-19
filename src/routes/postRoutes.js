const express = require('express');

const router = express.Router();

const PostController = require('../controllers/PostController');
const post = require('../validations/postValidations');

const { authMiddleware } = require('../middlewares/authMiddlewares');

router.post(
  '/',
  authMiddleware,
  post.titleValidation,
  post.contentValidation,
  post.categoryValidation,
  PostController.createPost,
);

router.get(
  '/',
  authMiddleware,
  PostController.getPosts,
);

module.exports = router;
