"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Professor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Professor.hasMany(models.Review, {
        foreignKey: "professor_id",
        as: "reviews",
      });
    }
  }
  Professor.init(
    {
      name: DataTypes.STRING,
      university: DataTypes.STRING,
      department: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Professor",
    }
  );
  return Professor;
};
