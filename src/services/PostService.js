const { BlogPost } = require('../models');
const { PostCategory } = require('../models');

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

module.exports = { createPost };
