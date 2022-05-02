const express = require('express')
const router = express.Router()

const { getRegions } = require('../controllers/regions')

router
  .route('/')
  .get(getRegions)

module.exports = router
