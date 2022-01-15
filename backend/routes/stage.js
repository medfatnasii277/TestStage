const express = require('express')
const router = express.Router()

const { getStages, createStage } = require('../controller/stage')

router.route('/stages').get(getStages)
router.route('/stages').post(createStage)

module.exports = router
