const { StatusCodes } = require('http-status-codes')
const { sequelize } = require('../db')
const { Op } = require('sequelize')
const CustomError = require('../errors')
const { assertSdgIdsPassed } = require('../utils/database-helpers')

// Public Route
// GET /api/v1/subgoals
const filterSubgoals = async (req, res, next) => {
  assertSdgIdsPassed(req)

  try {
    var where = {}
    if (Object.keys(req.query).length > 1) {
      const filterArray = []
      Object.keys(req.query).map(q => {
        if (q === 'sdgIds') filterArray.push({ SdgGoalId: req.query.sdgIds })
        if (q === 'titles') filterArray.push({ title: req.query.titles })
      })
      where = { [Op.and]: filterArray }
    } else {
      where = { SdgGoalId: req.query.sdgIds }
    }

    const subgoals = await sequelize.models.Subgoal.findAll({ where })
    res.status(StatusCodes.OK).json({ count: subgoals.length, subgoals })

  } catch (e) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: e.toString() })
  }
}

module.exports = {
  filterSubgoals
}
