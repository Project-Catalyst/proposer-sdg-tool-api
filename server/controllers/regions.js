const { StatusCodes } = require('http-status-codes')
const { sequelize } = require('../db')

// Public Route
// GET /api/v1/regions
const getRegions = async (req, res) => {
  const regions = await sequelize.models.Region.findAll()
  res.status(StatusCodes.OK).json({ count: regions.length, regions })
}

module.exports = {
  getRegions
}
