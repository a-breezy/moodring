const router = require("express").Router();
const {
	//! delete getAllUsers
	getAllUsers,
	getUserById,
	addUser,
} = require("../../controllers/user-controllers");

router.route("/").get(getAllUsers).post(addUser);

router.route("/:id").get(getUserById);

module.exports = router;
