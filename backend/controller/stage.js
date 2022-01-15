const Stage = require('../models/stage')
const ErrorHandler = require('../utils/errorHandler')
const catchAsyncErrors = require('../middlewares/catchAsyncErrors')

exports.getStages = catchAsyncErrors(async (req, res, next) => {
	const stages = await Stage.find()

	stages.sort(function (a, b) {
		return a.annee - b.annee
	})

	if (!stages) {
		return next(new ErrorHandler('not found!', 404))
	}

	res.status(200).json({
		success: true,
		stages,
	})
})

exports.createStage = catchAsyncErrors(async (req, res, next) => {
	const stage = await Stage.create(req.body)

	res.status(201).json({
		success: true,
		stage,
	})
})
