const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize'); // Подключение к базе данных Sequelize

const User = sequelize.define('User', {
  login: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  mail: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true
  }
  // Другие поля по необходимости
});

// Определение ассоциаций
User.hasMany(Route, {
  foreignKey: 'author_id',
  as: 'routes'
});
User.hasMany(Review, {
  foreignKey: 'user_id',
  as: 'reviews'
});
User.hasMany(RouteRating, {
  foreignKey: 'user_id',
  as: 'routeRatings'
});

module.exports = User;