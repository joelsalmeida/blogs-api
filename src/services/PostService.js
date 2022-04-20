const { Op } = require('sequelize');
const { BlogPost } = require('../models');
const { PostCategory } = require('../models');
const { User } = require('../models');
const { Category } = require('../models');

const createPost = async (userId, title, content, categoryIds) => {
  try {
    const newPost = await BlogPost.create({ userId, title, content });
    const postId = newPost.dataValues.id;
    const categories = categoryIds.map((id) => ({ postId, categoryId: id }));
    await PostCategory.bulkCreate(...categories);

    return { id: postId, userId, title, content };
  } catch (error) {
    console.log(error);
  }
};

const getPosts = async () => {
  try {
    const posts = await BlogPost.findAll({
       include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
       { model: Category, as: 'categories' }],
    });
    return posts;
  } catch (error) {
    console.log(error);
  }
};

const getPostById = async (id) => {
  try {
    const posts = await BlogPost.findOne({
      where: { id },
      include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' }],
    });
    return posts;
  } catch (error) {
    console.log(error);
  }
};

const updatePost = async (email, id, updates) => {
  try {
    const { dataValues: { id: userId } } = await User.findOne({ where: { email } });
    
    const post = async () => BlogPost.findOne({ where: { id },
      include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' }],
    });

    const { dataValues: { userId: postUserId } } = await post();
    if (postUserId !== userId) return null;
    
    await BlogPost.update(updates, { where: { id } });
    return await post();
  } catch (error) {
    console.log(error);
  }
};

const deletePost = async (email, id) => {
  try {
    const { dataValues: { id: userId } } = await User.findOne({ where: { email } });
    
    const post = async () => BlogPost.findOne({ where: { id },
      include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } }],
    });
    const { dataValues: { userId: postUserId } } = await post();

    if (!await post()) return null;
    if (postUserId !== userId) return { unauthorized: 'Unauthorized' };
    
    return await BlogPost.destroy({ where: { id } });
  } catch (error) {
    console.log(error);
  }
};

const getPostsBySearch = async (search) => {
  try {
    const posts = await BlogPost.findAll({
      where: { [Op.or]: [
        { title: { [Op.like]: `%${search}%` } },
        { content: { [Op.like]: `%${search}%` } },
      ] },
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories' },
      ],
    });
    return !posts ? [] : posts;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createPost, getPosts, getPostById, getPostsBySearch, updatePost, deletePost };
