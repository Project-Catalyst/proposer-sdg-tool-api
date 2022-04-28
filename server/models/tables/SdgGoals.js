const { DataTypes, Model } = require('sequelize')

module.exports = (sequelize) => {
  class SdgGoal extends Model { }
  SdgGoal.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    timestamps: false
  })

  return SdgGoal
}