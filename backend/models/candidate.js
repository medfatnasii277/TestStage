const mongoose = require('mongoose')

const candidateSchema = mongoose.Schema(
	{
		nom: {
			type: String,
			required: [true, 'Veuillez entrer votre nom'],
		},
		prenom: {
			type: String,
			required: [true, 'Veuillez entrer votre prenom'],
		},
		niveau: {
			type: String,
			required: [true, 'Veuillez sélectionner le niveau.'],
			enum: {
				values: ['Licence', 'Master', 'Ing'],
				message: 'Veuillez sélectionner le niveau correct',
			},
		},
		faculte: {
			type: String,
			required: [true, 'Veuillez entrer votre faculte'],
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Candidate', candidateSchema)
