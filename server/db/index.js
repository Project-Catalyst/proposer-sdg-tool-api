const Sequelize = require('sequelize')

const init = () => {
    try {
        const sequelize = new Sequelize(process.env.DB, process.env.DB_USER, process.env.DB_PASSWORD, {
            dialect: 'postgres',
            host: process.env.HOST,
            dialectOptions: { connectTimeout: 10000 },
            logQueryParameters: true,
            benchmark: true,
            logging: false
        })
        loadModelsAndRelations(sequelize)
        return sequelize
    } catch (e) {
        console.log("ERROR CONNECTING TO DB:")
        console.log(e)
    }
}

const loadModelsAndRelations = (sequelize) => {
    require('../models/tables/HumanRights')(sequelize)
    require('../models/tables/Keywords')(sequelize)
    require('../models/tables/Metrics')(sequelize)
    require('../models/tables/SdgGoals')(sequelize)
    require('../models/tables/Subgoals')(sequelize)
    require('../models/tables/Countries')(sequelize)
    require('../models/tables/Regions')(sequelize)
    require('../models/tables/Themes')(sequelize)

    sequelize.models.SdgGoal.belongsToMany(sequelize.models.Keyword, { through: 'SdgGoalsToKeywordsMap', timestamps: false })
    sequelize.models.Keyword.belongsToMany(sequelize.models.SdgGoal, { through: 'SdgGoalsToKeywordsMap', timestamps: false })

    sequelize.models.SdgGoal.hasMany(sequelize.models.Subgoal)
    sequelize.models.Subgoal.belongsTo(sequelize.models.SdgGoal)

    sequelize.models.SdgGoal.belongsToMany(sequelize.models.HumanRight, { through: 'SdgGoalsToHumanRightsMap', timestamps: false })
    sequelize.models.HumanRight.belongsToMany(sequelize.models.SdgGoal, { through: 'SdgGoalsToHumanRightsMap', timestamps: false })

    sequelize.models.Subgoal.hasMany(sequelize.models.Metric)
    sequelize.models.Metric.belongsTo(sequelize.models.Subgoal)

    sequelize.models.Subgoal.belongsToMany(sequelize.models.HumanRight, { through: 'SubgoalsToHumanRightsMap', timestamps: false })
    sequelize.models.HumanRight.belongsToMany(sequelize.models.Subgoal, { through: 'SubgoalsToHumanRightsMap', timestamps: false })
}

module.exports = { sequelize: init() }