const express = require('express')
const router = express.Router()

const { filterSdgGoals } = require('../controllers/sdg-goals')

router
  .route('/')
  .get(filterSdgGoals)

module.exports = router
