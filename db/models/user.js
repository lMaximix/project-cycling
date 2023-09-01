const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Route, Review, RouteRating }) {
      this.hasMany(Route, {
        foreignKey: 'author_id',
        // as: 'routes'
      });
      this.hasMany(Review, {
        foreignKey: 'user_id',
        // as: 'reviews'
      });
      this.hasMany(RouteRating, {
        foreignKey: 'user_id',
        // as: 'routeRatings'
      });
    }
  }
  User.init(
    {
      login: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      mail: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
