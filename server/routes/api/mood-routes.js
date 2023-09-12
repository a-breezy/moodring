const router = require("express").Router();
const {
	//! delete getAllMoods
	getAllMoods,
	getMoodByUserId,
	addMood,
	updateMood,
	deleteMood,
} = require("../../controllers/mood-controller");

router.route("/").get(getAllMoods).post(addMood);

router.route("/:userId").get(getMoodByUserId);

module.exports = router;
