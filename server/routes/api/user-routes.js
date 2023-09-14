const router = require("express").Router();
const {
	//! delete getAllUsers
	getAllUsers,
	getUserById,
	addUser,
} = require("../../controllers/user-controllers");

// api/user/
router.route("/").get(getAllUsers).post(addUser);
// api/user/<userId>
router.route("/:id").get(getUserById);

module.exports = router;
