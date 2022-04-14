const UserModel = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: { primaryKey: true, autoIncrement: true, allowNull: false, type: DataTypes.INTEGER },
    name: { type: DataTypes.STRING, allowNull: false },
  }, { tableName: 'Categories', underscored: true, timestamps: false });

  return Category;
};

module.exports = UserModel;
