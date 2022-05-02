const { StatusCodes } = require('http-status-codes')
const { sequelize } = require('../db')

// Public Route
// GET /api/v1/countries
const getCountries = async (req, res) => {
  debugger
  const countries = await sequelize.models.Country.findAll()
  res.status(StatusCodes.OK).json({ count: countries.length, countries })
}

module.exports = {
  getCountries
}
