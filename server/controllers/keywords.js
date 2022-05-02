const { StatusCodes } = require('http-status-codes')
const { sequelize } = require('../db')

// Public Route
// GET /api/v1/keywords
const getAllKeywords = async (req, res) => {
  const keywords = await sequelize.models.Keyword.findAll()
  res.status(StatusCodes.OK).json({ count: keywords.length, keywords })
}

module.exports = {
  getAllKeywords
}
