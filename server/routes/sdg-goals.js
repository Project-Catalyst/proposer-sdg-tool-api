const express = require('express')
const router = express.Router()

const { getReq } = require('../controllers/sdg-goals')

router
  .route('/')
  .get(getReq)

module.exports = router
