const express = require('express')
const router = express.Router()

const { getThemes } = require('../controllers/themes')

router
  .route('/')
  .get(getThemes)

module.exports = router
