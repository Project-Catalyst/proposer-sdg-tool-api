const { StatusCodes } = require('http-status-codes')
const { sequelize } = require('../db')

// Public Route
// GET /api/v1/themes
const getThemes = async (req, res) => {
  const themes = await sequelize.models.Theme.findAll()
  res.status(StatusCodes.OK).json({ count: themes.length, themes })
}

module.exports = {
  getThemes
}
