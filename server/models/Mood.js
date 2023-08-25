const { Schema, model } = require("mongoose");

const moodSchema = new Schema({
	createdAt: {
		type: Date,
		default: Date.now,
	},
	user: {
		type: String,
		// required: true,
	},
	// todo these need to be called through the our api
	sleepScore: {
		type: Number,
	},
	readinessScore: {
		type: Number,
	},
	activityScore: {
		type: Number,
	},
	mood: {
		type: String,
		// required: true,
		enum: [
			"Ecstatic",
			"Happy",
			"Relaxed",
			"Indifferent",
			"Bored",
			"Sad",
			"Stressed",
			"Anxious",
			"Angry",
		],
	},
	description: {
		type: String,
		trim: true,
		maxlength: 280,
	},
});

const Mood = model("Mood", moodSchema);

module.exports = Mood;
