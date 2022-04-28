const express = require('express')
const router = express.Router()

const { getReq } = require('../controllers/human-rights')

router
  .route('/')
  .get(getReq)

module.exports = router
