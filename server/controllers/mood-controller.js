const { Mood } = require("../models");

const moodController = {
	// methods

	// get all users
	//! testing only
	getAllMoods(req, res) {
		Mood.find({}).catch((err) => {
			console.log(err);
			res.status(400).json(err);
		});
	},

	//todo getMoodByUserId
	getMoodByUserId({ params }, res) {
		Mood.findOne({ _id: params._id })
			.then((dbMoodData) => {
				if (!dbMoodData) {
					res.status(404).json({ message: "No mood found with this id" });
					return;
				}
				res.json(dbMoodData);
			})
			.catch((err) => {
				console.log(err);
				res.status(400).json(err);
			});
	},

	//todo addMood
	addMood({ body }, res) {
		Mood.create(body)
			.then((data) => console.log(data))
			.then((dbMoodData) => res.json(dbMoodData))
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
