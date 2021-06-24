'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Persona extends Model {
   
    static associate(models) {
   // hasOne
   Persona.hasOne(models.Direccion, {
    foreignKey: 'personaId',
    as: "direccions"
  })
    }
  };
  Persona.init({
    name: DataTypes.STRING,
    lastname: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Persona',
  });
  return Persona;
};