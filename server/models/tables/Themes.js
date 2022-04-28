const { DataTypes, Model } = require('sequelize')

module.exports = (sequelize) => {
  class Theme extends Model { }
  Theme.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    timestamps: false
  })

  return Theme
}