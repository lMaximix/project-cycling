const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class RoutePoint extends Model {
    static associate({ Route }) {
      this.belongsTo(Route, {
        foreignKey: 'route_id',
        // as: 'route',
      });
    }
  }
  RoutePoint.init(
    {
      latitude: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      longitude: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      // Другие поля по необходимости
    },
    {
      sequelize,
      modelName: 'RoutePoint',
    }
  );
  return RoutePoint;
};
