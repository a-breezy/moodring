const router = require("express").Router();
const {
	getLatestMoodByUserId,
	getLastSevenDayMoods,
	addMood,
	updateMood,
	deleteMood,
} = require("../../controllers/mood-controller");

// api/mood/<userId>
router.route("/:userId").get(getLatestMoodByUserId).post(addMood);
// api/mood/<userId>/lastSevenDay
router.route("/:userId/lastSevenDays").get(getLastSevenDayMoods);
// api/mood/<userId>/<moodId>
router.route("/:userId/:moodId").put(updateMood).delete(deleteMood);

module.exports = router;
