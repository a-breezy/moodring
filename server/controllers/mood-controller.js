const { Mood } = require("../models");
const { db } = require("../models/User");

const moodController = {
	// Gets user's most recent mood
	getLatestMoodByUserId({ params }, res) {
		Mood.findOne({ userId: params.userId })
			.then((dbMoodData) => {
				if (!dbMoodData) {
					res
						.status(404)
						.json({ message: "No mood or user found with this id" });
					return;
				}
				res.json(dbMoodData);
			})
			.catch((err) => {
				console.log(err);
				res.status(400).json(err);
			});
	},

	// Gets moods for the last 7 days -> for use in user's graph
	getLastSevenDayMoods({ params }, res) {
		const sevenDaysAgo = new Date();
		sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
		console.log("seven days ago", sevenDaysAgo);

		Mood.find({
			userId: params.userId,
			createdAt: { $gte: sevenDaysAgo },
		})
			.sort({ createdAt: -1 })
			.limit(7)
			.then((dbMoodData) => {
				console.log(dbMoodData);
				if (!dbMoodData) {
					res.status(404).json({ message: "No user found with this id" });
					return;
				}
				res.json(dbMoodData);
			})
			.catch((err) => {
				console.log(err);
				res.status(400).json(err);
			});
	},

	// create new mood
	addMood({ params, body }, res) {
		Mood.create(body)
			.then(({ _id }) => {
				return User.findByIdAndUpdate(
					{ _id: params.userId },
					{ $push: { moods: _id } },
					{ new: true }
				);
			})
			.then((dbMoodData) => {
				if (!dbMoodData) {
					res
						.status(404)
						.json({ message: "No mood or user found with this id" });
					return;
				}
				res.json(dbMoodData);
			})
			.catch((err) => res.status(400).json(err));
	},

	//todo updateMood
	updateMood({ params, body }, res) {
		Mood.findByIdAndUpdate({ _id: params._id }, body, {
			new: true,
		})
			.then((dbMoodData) => {
				if (!dbMoodData) {
					res.status(404).json({ message: "No mood found with this id" });
					return;
				}
				res.json(dbMoodData);
			})
			.catch((err) => res.status(400).json(err));
	},

	//todo deleteMood
	deleteMood({ params }, res) {
		Mood.findByIdAndDelete({ _id: params._id })
			.then((dbMoodData) => {
				if (!dbMoodData) {
					res.status(404).json({ message: "No mood found with this id" });
					return;
				}
				res.json(dbMoodData);
			})
			.catch((err) => res.status(400).json(err));
	},
};

module.exports = moodController;
