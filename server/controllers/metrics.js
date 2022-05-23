const { StatusCodes } = require('http-status-codes')
const { sequelize } = require('../db')
const { Op } = require('sequelize')
const CustomError = require('../errors')
const { assertSubgoalIdsPassed } = require('../utils/database-helpers')

// Public Route
// GET /api/v1/metrics
const getMetrics = async (req, res) => {
  assertSubgoalIdsPassed(req)

  try {
    const where = { SubgoalId: req.query.sgIds }
    const metrics = await sequelize.models.Metric.findAll({ where })

    res.status(StatusCodes.OK).json({ count: metrics.length, metrics })
  } catch (e) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: e.toString() })
  }
}

module.exports = {
  getMetrics
}
