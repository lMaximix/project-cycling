const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Route extends Model {
    static associate({ User, RoutePoint, Review, RouteRating }) {
      this.belongsTo(User, {
        foreignKey: 'author_id',
        as: 'author',
      });
      this.hasMany(RoutePoint, {
        foreignKey: 'route_id',
        as: 'routePoints',
      });
      this.hasMany(Review, {
        foreignKey: 'route_id',
        as: 'reviews',
      });
      this.hasMany(RouteRating, {
        foreignKey: 'route_id',
        as: 'routeRatings',
      });
    }
  }
  Route.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      length: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      // Другие поля по необходимости
    },
    {
      sequelize,
      modelName: 'Route',
    }
  );
  return Route;
};
