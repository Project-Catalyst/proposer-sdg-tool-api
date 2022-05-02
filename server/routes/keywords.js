const express = require('express')
const router = express.Router()

const { getAllKeywords } = require('../controllers/keywords')

router
  .route('/')
  .get(getAllKeywords)

module.exports = router
