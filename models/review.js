"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Review.belongsTo(models.Professor, {
        foreignKey: "professor_id",
        as: "professor",
      });
    }
  }
  Review.init(
    {
      professor_id: DataTypes.INTEGER,
      title: DataTypes.TEXT,
      review: DataTypes.TEXT,
      rating: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Review",
    }
  );
  return Review;
};
