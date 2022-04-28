const { DataTypes, Model } = require('sequelize')

module.exports = (sequelize) => {
  class Subgoal extends Model { }
  Subgoal.init({
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

  return Subgoal
}