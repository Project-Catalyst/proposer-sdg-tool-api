const { DataTypes, Model } = require('sequelize')

module.exports = (sequelize) => {
  class Country extends Model { }
  Country.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    timestamps: false
  })

  return Country
}