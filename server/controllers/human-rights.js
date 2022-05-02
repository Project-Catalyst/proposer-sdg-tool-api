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
      [Op.and]: [
        { '$SdgGoals.id$': req.query.sdgIds },
        { '$Subgoals.id$': req.query.sgIds, }
      ]
    }
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
