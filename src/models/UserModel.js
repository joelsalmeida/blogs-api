const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { primaryKey: true, autoIncrement: true, allowNull: false, type: DataTypes.INTEGER },
    displayName: { field: 'display_name', type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    password: { type: DataTypes.STRING(6), allowNull: false },
    image: { type: DataTypes.STRING, allowNull: false },
  }, { tableName: 'Users', underscored: true, timestamps: false });

  return User;
};

module.exports = UserModel;
