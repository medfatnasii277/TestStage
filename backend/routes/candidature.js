const express = require('express')
const router = express.Router()

const { getCandidatures, postulerCandidature } = require('../controller/candidature')

router.route('/:codeStage/candidates').get(getCandidatures)
router.route('/demande/:codeCandidate/:codeStage').patch(postulerCandidature)

module.exports = router
