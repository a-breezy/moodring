const router = require("express").Router();
const {
	//! delete getAllUsers
	getAllUsers,
	getUserByEmail,
	addUser,
} = require("../../controllers/user-controllers");

router.route("/").get(getAllUsers).post(addUser);

router.route("/:email").get(getUserByEmail);

module.exports = router;
