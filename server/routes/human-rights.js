const express = require('express')
const router = express.Router()

const { humanRightsFilter } = require('../controllers/human-rights')

router
  .route('/')
  .get(humanRightsFilter)

module.exports = router
