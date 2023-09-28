const { Mood } = require("../models");
const { db } = require("../models/User");

const moodController = {
	// Gets user's most recent mood
	getLatestMoodByUserId({ params }, res) {
		Mood.findOne({ userId: params.userId })
			.sort({ _id: -1 })
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
	// ! this request returns 400 code, although it goes through. Check out postman to figure out issue perhaps requesting the userId from params alome
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
				console.log(dbMoodData);
				res.json(dbMoodData);
			})
			.catch((err) => res.status(400).json(err));
	},

	//updateMood
	updateMood({ params, body }, res) {
		console.log("params", params, " body", body);
		Mood.findByIdAndUpdate({ _id: params.moodId }, body, {
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

	// deleteMood
	deleteMood({ params }, res) {
		Mood.findByIdAndDelete({ _id: params.moodId })
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
