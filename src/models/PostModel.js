const PostModel = (sequelize, DataTypes) => {
  const Post = sequelize.define('BlogPost', {
    id: { primaryKey: true, autoIncrement: true, allowNull: false, type: DataTypes.INTEGER },
    title: { type: DataTypes.STRING, allowNull: false },
    content: { type: DataTypes.STRING, allowNull: false },
    userId: { field: 'user_id', type: DataTypes.INTEGER, allowNull: false },
    published: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    updated: { type: DataTypes.DATE } },
    { tableName: 'Blog_posts', underscored: true, timestamps: false });

  Post.associate = (models) => {
    Post.hasOne(models.User, 
    { foreignKey: 'id', as: 'user_id' });
  };

  return Post;
};

module.exports = PostModel;
