const { StatusCodes } = require('http-status-codes')
const { sequelize } = require('../db')
const { Op } = require('sequelize')
const { searchByColumnName } = require('../utils/database-helpers')
const CustomError = require('../errors')

// Public Route
// GET /api/v1/sdgGoals
const filterSdgGoals = async (req, res) => {
  try {
    var where = {}
    if (Object.keys(req.query).length > 1) {
      const filterArray = []
      Object.keys(req.query).map(q => {
        if (q === 'ids') filterArray.push({ id: req.query.ids })
        if (q === 'titles') filterArray.push({ title: req.query.titles })
        if (q === 'keywords') filterArray.push({ '$Keywords.title$': req.query.keywords })
      })
      where = { [Op.or]: filterArray }
    } else {
      Object.keys(req.query).map(q => {
        if (q === 'ids') where = { id: req.query.ids }
        if (q === 'titles') where = { title: req.query.titles }
        if (q === 'keywords') where = { '$Keywords.title$': req.query.keywords }
      })
    }

    const sdgGoals = await sequelize.models.SdgGoal.findAll({
      where: where, include: [
        {
          model: sequelize.models.Keyword,
          through: { attributes: [] }
        }]
    })
    res.status(StatusCodes.OK).json({ count: sdgGoals.length, sdgGoals })

  } catch (e) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: e.toString() })
  }
}

// Public Route
// GET /api/v1/sdgGoals/titles
const searchThroughTitles = async (req, res, next) => {
  if (!req.query?.title) throw new CustomError.BadRequestError("Endpoint requires title to work properly. Please pass title in the query params")

  try {
    const where = {
      title: searchByColumnName("title", req.query.title)
    }

    const sdgGoals = await sequelize.models.SdgGoal.findAll({ where })
    res.status(StatusCodes.OK).json({ count: sdgGoals.length, sdgGoals })

  } catch (e) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: e.toString() })
  }
}

module.exports = {
  filterSdgGoals,
  searchThroughTitles
}
