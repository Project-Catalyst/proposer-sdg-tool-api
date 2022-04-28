const { StatusCodes } = require('http-status-codes')

// Public Route
// GET /api/v1/humanRights
const getReq = async (req, res) => {
 
  res.status(StatusCodes.OK).json({ msg: "success" })
}

module.exports = {
  getReq
}
