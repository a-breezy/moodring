const { Schema, model } = require("mongoose");

const moodSchema = new Schema({
	// set a custom id
	moodId: {
		type: Schema.Types.ObjectId,
		default: () => new Types.ObjectId(),
	},
	mood: {
		type: String,
		required: true,
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
		default: "Select Mood",
	},
});

const Mood = model("Mood", moodSchema);

module.exports = Mood;
