const { DataTypes, Model } = require('sequelize')

module.exports = (sequelize) => {
  class Metric extends Model { }
  Metric.init({
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  }, {
    sequelize,
    timestamps: false
  })

  return Metric
}