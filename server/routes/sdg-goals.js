const express = require('express')
const router = express.Router()

const { filterSdgGoals, searchThroughTitles } = require('../controllers/sdg-goals')

router
  .route('/')
  .get(filterSdgGoals)

router
  .route('/searchTitles')
  .get(searchThroughTitles)
module.exports = router
