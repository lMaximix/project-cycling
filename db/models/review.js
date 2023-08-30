const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize'); // Подключение к базе данных Sequelize

const Review = sequelize.define('Review', {
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  comment: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  // Другие поля по необходимости
});

// Определение ассоциаций
Review.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'user',
});
Review.belongsTo(Route, {
  foreignKey: 'route_id',
  as: 'route',
});

module.exports = Review;
