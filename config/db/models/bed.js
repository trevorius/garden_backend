'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bed extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Bed.init({
    name: DataTypes.STRING,
    watered: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Bed',
  });
  return Bed;
};