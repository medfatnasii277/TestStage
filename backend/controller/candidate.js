const Candidate = require('../models/candidate')
const ErrorHandler = require('../utils/errorHandler')
const catchAsyncErrors = require('../middlewares/catchAsyncErrors')

exports.getCandidates = catchAsyncErrors(async (req, res, next) => {
	const candidates = await Candidate.find()

	if (!candidates) {
		return next(new ErrorHandler('not found!', 404))
	}

	res.status(200).json({
		success: true,
		candidates,
	})
})

exports.createCandidate = catchAsyncErrors(async (req, res, next) => {
	const candidate = await Candidate.create(req.body)

	res.status(201).json({
		success: true,
		candidate,
	})
})
