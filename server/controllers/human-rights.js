const { StatusCodes } = require('http-status-codes')
const { sequelize } = require('../db')
const { Op } = require('sequelize')
const CustomError = require('../errors')

// Public Route
// GET /api/v1/humanRights
const humanRightsFilter = async (req, res, next) => {
  if (!req.query?.sdgIds) return next(new CustomError.BadRequestError("Endpoint requires sdg goal ids to work properly. Please pass sdgIds in the query params"))
  if (!req.query?.sgIds) return next(new CustomError.BadRequestError("Endpoint requires subgoal ids to work properly. Please pass sgIds in the query params"))

  try {
    const where = {
      [Op.or]: [
        { '$SdgGoals.id$': req.query.sdgIds },
        { '$Subgoals.id$': req.query.sgIds }
      ]
    }
    const filterArr = []
    Object.keys(req.query).map(q => {
      if(q === "countries") filterArr.push({'$Countries.name$': req.query.countries})
      if(q === "regions") filterArr.push({'$Regions.name$': req.query.regions})
      if(q === "themes") filterArr.push({'$Themes.name$': req.query.themes})
    })
    where[Op.and] = filterArr

    const humanRights = await sequelize.models.HumanRight.findAll({
      where: where,
      include: [
        {
          model: sequelize.models.SdgGoal,
          require: true,
          duplicating: false,
          through: { attributes: [] }
        },
        {
          model: sequelize.models.Subgoal,
          require: true,
          duplicating: false,
          through: { attributes: [] }
        },
        {
          model: sequelize.models.Country,
          require: true,
          duplicating: false,
          through: { attributes: [] }
        },
        {
          model: sequelize.models.Region,
          require: true,
          duplicating: false,
          through: { attributes: [] }
        },
        {
          model: sequelize.models.Theme,
          require: true,
          duplicating: false,
          through: { attributes: [] }
        }
      ]
    })
    res.status(StatusCodes.OK).json({ count: humanRights.length, humanRights })
  } catch (e) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: e.toString() })
  }
}

module.exports = {
  humanRightsFilter
}
