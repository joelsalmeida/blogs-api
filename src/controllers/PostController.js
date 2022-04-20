const jwt = require('jsonwebtoken');
const PostService = require('../services/PostService');
const { User } = require('../models');
const err = require('../schemas/postErrors');

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

const getPostById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const post = await PostService.getPostById(id);
    if (!post) return next(err.post.invalid);
    return res.status(200).json(post);
  } catch (error) {
    console.log(error);
  }
};

const getPostsBySearch = async (req, res) => {
  const { q } = req.query;

  try {
    const posts = await PostService.getPostsBySearch(q);
    return res.status(200).json(posts);
  } catch (error) {
    console.log(error);
  }
};

const updatePost = async (req, res, next) => {
  const { authorization } = req.headers;
  const { data: { email } } = jwt.verify(authorization, process.env.JWT_SECRET);
  
  const { id } = req.params;
  const { title, content, categoryIds } = req.body;

  if (categoryIds) return next(err.category.cantBeEdited);

  try {
    const post = await PostService.updatePost(email, id, { title, content });
    if (!post) return next(err.user.unauthorized);
    return res.status(200).json(post);
  } catch (error) {
    console.log(error);
  }
};

const deletePost = async (req, res, next) => {
  const { authorization } = req.headers;
  const { data: { email } } = jwt.verify(authorization, process.env.JWT_SECRET);  
  const { id } = req.params;

  try {
    const post = await PostService.deletePost(email, id);

    if (!post) return next(err.post.invalid);
    if (post.unauthorized) return next(err.user.unauthorized);
    
    return res.status(204).end();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createPost, getPosts, getPostById, getPostsBySearch, updatePost, deletePost };
