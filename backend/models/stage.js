const mongoose = require('mongoose')

const stageSchema = mongoose.Schema(
	{
		niveau: {
			type: String,
			required: [true, 'Veuillez sélectionner le niveau.'],
			enum: {
				values: ['Licence', 'Master', 'Ing'],
				message: 'Veuillez sélectionner le niveau correct',
			},
		},
		periode: {
			type: Number,
			required: [true, 'Veuillez entrer la période'],
		},
		annee: {
			type: Number,
			required: [true, "Veuillez entrer l'annee"],
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Stage', stageSchema)
