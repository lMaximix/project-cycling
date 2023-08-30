const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize'); // Подключение к базе данных Sequelize

const Route = sequelize.define('Route', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  length: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  }
  // Другие поля по необходимости
});

// Определение ассоциаций
Route.belongsTo(User, {
  foreignKey: 'author_id',
  as: 'author'
});
Route.hasMany(RoutePoint, {
  foreignKey: 'route_id',
  as: 'routePoints'
});
Route.hasMany(Review, {
  foreignKey: 'route_id',
  as: 'reviews'
});
Route.hasMany(RouteRating, {
  foreignKey: 'route_id',
  as: 'routeRatings'
});

module.exports = Route;
