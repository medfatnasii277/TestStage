const express = require('express')
const router = express.Router()

const { getCandidates, createCandidate } = require('../controller/candidate')

router.route('/candidates').get(getCandidates)
router.route('/candidates').post(createCandidate)

module.exports = router
