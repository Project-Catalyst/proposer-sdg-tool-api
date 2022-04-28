const { DataTypes, Model } = require('sequelize')

module.exports = (sequelize) => {
  class Region extends Model { }
  Region.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    timestamps: false
  })

  return Region
}