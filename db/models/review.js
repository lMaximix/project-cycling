const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate({ User, Route }) {
      this.belongsTo(User, {
        foreignKey: 'user_id',
        // as: 'user',
      });
      this.belongsTo(Route, {
        foreignKey: 'route_id',
        // as: 'route',
      });
    }
  }
  Review.init(
    {
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      comment: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      // Другие поля по необходимости
    },
    {
      sequelize,
      modelName: 'Review',
    }
  );
  return Review;
};
