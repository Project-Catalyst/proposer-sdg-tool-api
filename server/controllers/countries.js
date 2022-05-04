const { StatusCodes } = require('http-status-codes')
const { sequelize } = require('../db')
const { assertSdgAndSubgoalIdsPassed } = require('../utils/database-helpers')

// Public Route
// GET /api/v1/countries
const getCountries = async (req, res) => {
  assertSdgAndSubgoalIdsPassed(req)

  const countries = await sequelize.models.Country.findAll()
  res.status(StatusCodes.OK).json({ count: countries.length, countries })
}

module.exports = {
  getCountries
}
