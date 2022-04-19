const jwt = require('jsonwebtoken');
const PostService = require('../services/PostService');
const { User } = require('../models');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { authorization } = req.headers;

  try {
    const { data: { email, password } } = jwt.verify(authorization, process.env.JWT_SECRET);
    const { id: userId } = await User.findOne({ where: { email, password } });

    const newPost = await PostService.createPost(userId, title, content, categoryIds);

    return res.status(201).json(newPost);
  } catch (error) {
    console.log(error);
  }
};

const getPosts = async (_req, res) => {
  try {
    const posts = await PostService.getPosts();
    return res.status(200).json(posts);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createPost, getPosts };
