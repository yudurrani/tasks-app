const mongoose = require('mongoose')


const surveyMetadataSchema = new mongoose.Schema({

	 
	 surveyName: {
        type: String,
        require: true,
        trim: true,
    },
	 discription:{
		 type: String,
		 trim: true,
	 },

	 surveySections: [{
		 sectionName: {
			type: String,
			required: true,
			trim: true,
		 },
		 sectionDiscription:{
			 type: String,
			 trim: true,
		 },
		 orderNumber:{
			 type: Number,
			 required: true,
		 },

		 questions: [{
			 
			 questionText:{
				 type: String,
				 required: true,
			 },
			 
			 allowMultiple: {
				type: Boolean,
				required: true,
			},

			orderNumber:{
				type: Number,
				required: true,
			},
			 
			answerOptions: [{
				optionType :{
					required: true,
					type: String
				},
				optionLabel: {
					required: false,
					type: String,
				},

				defaultValue: {
					required: false,
					type: String,
				}
			}]
		 }]



	 }]
	 

})

const SurveyMetadata = mongoose.model('SurveyMetadata', surveyMetadataSchema)

module.exports = SurveyMetadata