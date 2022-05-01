const { StatusCodes } = require('http-status-codes')
const { sequelize } = require('../db')
const { Op } = require('sequelize')
const CustomError = require('../errors')

// Public Route
// GET /api/v1/subgoals
const filterSubgoals = async (req, res, next) => {
  // try {
    debugger
    if (!req.query?.sdgIds)  next(new CustomError.BadRequestError("Endpoint requires selected Sdg Goal ids to work properly. Please pass sdgIds in the query params"))

    var where = {}
    if (Object.keys(req.query).length > 1) {
      const filterArray = []
      Object.keys(req.query).map(q => {
        if (q === 'sdgIds') filterArray.push({ SdgGoalId: req.query.sdgIds })
        if (q === 'titles') filterArray.push({ title: req.query.titles })
      })
      where = { [Op.or]: filterArray }
    } else {
      Object.keys(req.query).map(q => {
        if (q === 'sdgIds') where = { SdgGoalId: req.query.sdgIds }
        if (q === 'titles') where = { title: req.query.titles }
      })
    }

    const subgoals = await sequelize.models.Subgoal.findAll({ where })
    res.status(StatusCodes.OK).json({ count: subgoals.length, subgoals })

  // } catch (e) {
  //   res.status(StatusCodes.BAD_REQUEST).json({ error: e.toString() })
  // }
}

module.exports = {
  filterSubgoals
}
