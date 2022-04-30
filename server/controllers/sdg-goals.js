const { StatusCodes } = require('http-status-codes')
const { sequelize } = require('../db')
const { Op } = require('sequelize')

// Public Route
// GET /api/v1/sdgGoals
const getReq = async (req, res) => {
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

    const sdgGoals = await sequelize.models.SdgGoal.findAll({ where: where, include: [sequelize.models.Keyword] })
    res.status(StatusCodes.OK).json({ count: sdgGoals.length, sdgGoals })

  } catch (e) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: e.toString() })
  }
}

module.exports = {
  getReq
}
