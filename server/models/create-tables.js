'use strict'
require('dotenv').config({ path: `../.env.local` })

const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const basename = path.basename(__filename)
const { sequelize } = require('../db')
const db = {}

const readModelFiles = (dirName) => {
  fs
    .readdirSync(dirName)
    .filter(file => {
      return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
    })
    .forEach(file => {
      console.log(file)
      const model = require(path.join(dirName, file))(sequelize, Sequelize.DataTypes)
      db[model.name] = model
    })
}

const defineRelations = () => {
  db.SdgGoal.belongsToMany(db.Keyword, { through: 'SdgGoalsToKeywordsMap', timestamps: false })
  db.Keyword.belongsToMany(db.SdgGoal, { through: 'SdgGoalsToKeywordsMap', timestamps: false })

  db.SdgGoal.hasMany(db.Subgoal)
  db.Subgoal.belongsTo(db.SdgGoal)

  db.SdgGoal.belongsToMany(db.HumanRight, { through: 'SdgGoalsToHumanRightsMap', timestamps: false })
  db.HumanRight.belongsToMany(db.SdgGoal, { through: 'SdgGoalsToHumanRightsMap', timestamps: false })

  db.Subgoal.hasMany(db.Metric)
  db.Metric.belongsTo(db.Subgoal)

  db.Subgoal.belongsToMany(db.HumanRight, { through: 'SubgoalsToHumanRightsMap', timestamps: false })
  db.HumanRight.belongsToMany(db.Subgoal, { through: 'SubgoalsToHumanRightsMap', timestamps: false })

  db.Country.belongsToMany(db.HumanRight, { through: 'CountryToHumanRightsMap', timestamps: false })
  db.HumanRight.belongsToMany(db.Country, { through: 'CountryToHumanRightsMap', timestamps: false })

  db.Region.belongsToMany(db.HumanRight, { through: 'RegionToHumanRightsMap', timestamps: false })
  db.HumanRight.belongsToMany(db.Region, { through: 'RegionToHumanRightsMap', timestamps: false })

  db.Theme.belongsToMany(db.HumanRight, { through: 'ThemeToHumanRightsMap', timestamps: false })
  db.HumanRight.belongsToMany(db.Theme, { through: 'ThemeToHumanRightsMap', timestamps: false })
}

readModelFiles(`${__dirname}/tables`)

sequelize
  .authenticate()
  .then(async () => {
    defineRelations()
    await sequelize.sync({ force: true })
  })
  .catch((err) => {
    console.error(err)
  })


db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
