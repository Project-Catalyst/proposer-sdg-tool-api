const { StatusCodes } = require('http-status-codes')
const { sequelize } = require('../db')
const { Op } = require('sequelize')

// Public Route
// GET /api/v1/humanRights
const getReq = async (req, res) => {
  try {
    const humanRights = await sequelize.models.HumanRight.findAll({
      where: {
        [Op.or]: [{
          id: req.query?.ids ? req.query.ids : []
        }, {
          title: req.query?.titles ? req.query.titles : []
        }]
      },
      include: [
        {
          model: sequelize.models.SdgGoal
        }
      ]
    })

    const humanRightsDV = humanRights?.map(x => x.dataValues)
    res.status(StatusCodes.OK).json({ humanRightsDV, sdgGoals, count: humanRightsDV.length })

  } catch (e) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: e.toString() })
  }
}

module.exports = {
  getReq
}
