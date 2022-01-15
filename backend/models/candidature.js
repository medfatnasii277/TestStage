const mongoose = require('mongoose')

const candidatureSchema = mongoose.Schema(
	{
		codeCandidate: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'Candidate',
		},
		codeStage: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'Stage',
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Candidature', candidatureSchema)
