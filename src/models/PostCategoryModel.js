const PostCategoryModel = (sequelize, _DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {}, 
  { tableName: 'Post_categories', underscored: true, timestamps: false });

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'Categories',
      through: PostCategory,
      foreignKey: 'post_id',
      otherKey: 'category_id',
    });
    
    models.Category.belongsToMany(models.BlogPost, {
      as: 'Blog_posts',
      through: PostCategory,
      foreignKey: 'category_id',
      otherKey: 'post_id',
    });
  };

  return PostCategory;
};

module.exports = PostCategoryModel;
