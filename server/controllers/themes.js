const { StatusCodes } = require('http-status-codes')
const { sequelize } = require('../db')
const { assertSdgAndSubgoalIdsPassed } = require('../utils/database-helpers')

// Public Route
// GET /api/v1/themes
const getThemes = async (req, res) => {
  assertSdgAndSubgoalIdsPassed(req)

  const themes = await sequelize.models.Theme.findAll()
  res.status(StatusCodes.OK).json({ count: themes.length, themes })
}

module.exports = {
  getThemes
}
