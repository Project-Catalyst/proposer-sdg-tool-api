const { DataTypes, Model } = require('sequelize')

module.exports = (sequelize) => {
  class Keyword extends Model { }
  Keyword.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    timestamps: false
  })

  return Keyword
}