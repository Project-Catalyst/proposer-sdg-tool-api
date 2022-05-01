const express = require('express')
const router = express.Router()

const { filterSubgoals } = require('../controllers/subgoals')

router
  .route('/')
  .get(filterSubgoals)

module.exports = router
