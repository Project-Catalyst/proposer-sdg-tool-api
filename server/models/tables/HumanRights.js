const { DataTypes, Model } = require('sequelize')

module.exports = (sequelize) => {
  class HumanRight extends Model { }
  HumanRight.init({
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  }, {
    sequelize,
    timestamps: false
  })

  return HumanRight
}