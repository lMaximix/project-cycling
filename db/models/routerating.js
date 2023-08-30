const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize'); // Подключение к базе данных Sequelize

const RouteRating = sequelize.define('RouteRating', {
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
  // Другие поля по необходимости
});

// Определение ассоциаций
RouteRating.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'user'
});
RouteRating.belongsTo(Route, {
  foreignKey: 'route_id',
  as: 'route'
});

module.exports = RouteRating;