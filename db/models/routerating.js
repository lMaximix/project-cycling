const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class RouteRating extends Model {
    static associate({ User, Route }) {
      this.belongsTo(User, {
        foreignKey: 'user_id',
        // as: 'user'
      });
      this.belongsTo(Route, {
        foreignKey: 'route_id',
        // as: 'route'
      });
    }
  }
  RouteRating.init(
    {
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      // Другие поля по необходимости
    },
    {
      sequelize,
      modelName: 'RouteRating',
    }
  );
  return RouteRating;
};
