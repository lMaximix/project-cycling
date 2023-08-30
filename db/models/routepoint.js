const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize'); // Подключение к базе данных Sequelize

const RoutePoint = sequelize.define('RoutePoint', {
  latitude: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  longitude: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
  // Другие поля по необходимости
});

// Определение ассоциаций
RoutePoint.belongsTo(Route, {
  foreignKey: 'route_id',
  as: 'route'
});

module.exports = RoutePoint;