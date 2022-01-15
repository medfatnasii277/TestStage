const Stage = require('../models/stage')
const Candidate = require('../models/candidate')
const Candidature = require('../models/candidature')
const ErrorHandler = require('../utils/errorHandler')
const catchAsyncErrors = require('../middlewares/catchAsyncErrors')

exports.getCandidatures = catchAsyncErrors(async (req, res, next) => {
	const codeStage = await Stage.findById(req.params.codeStage)

	console.log(codeStage)

	const candidatures = await Candidature.find({ codeStage: codeStage })

	if (!candidatures) {
		return next(new ErrorHandler('not found!', 404))
	}

	res.status(200).json({
		success: true,
		candidatures,
	})
})

exports.postulerCandidature = catchAsyncErrors(async (req, res, next) => {
	const codeCandidate = await Candidate.findById(req.params.codeCandidate)
	const codeStage = await Stage.findById(req.params.codeStage)

	const candidature = await Candidature.create({ codeCandidate, codeStage })

	res.status(201).json({
		success: true,
		candidature,
	})
})
