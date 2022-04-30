const { StatusCodes } = require('http-status-codes')
const { sequelize } = require('../db')
const { Op } = require('sequelize')

// Public Route
// GET /api/v1/sdgGoals
const getReq = async (req, res) => {
  try {
    var where = {}
    if (req.query?.ids && req.query?.titles) {
      where = {
        [Op.or]: [{
          id: req.query?.ids ? req.query.ids : []
        }, {
          title: req.query?.titles ? req.query.titles : []
        }]
      }
    } else if (req.query?.ids) {
      where = { id: req.query.ids }
    } else if (req.query?.titles) {
      where = { title: req.query.titles }
    }

    const sdgGoals = await sequelize.models.SdgGoal.findAll({
      required: true,
      where: where,
      include: [
        {
          model: sequelize.models.Keyword,
          where: req.query?.keywords ? { title: req.query.keywords } : {}
        }
      ]
    })
    res.status(StatusCodes.OK).json({ sdgGoals, count: sdgGoals.length })

  } catch (e) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: e.toString() })
  }
}

module.exports = {
  getReq
}
