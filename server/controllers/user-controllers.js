const { User } = require("../models");

const userController = {
	// methods

	// get all users
	//! testing only
	getAllUsers(req, res) {
		User.find({}).catch((err) => {
			console.log(err);
			res.status(400).json(err);
		});
	},

	//todo getUserByEmail
	getUserByEmail({ params }, res) {
		User.findOne({ email: params.email })
			.then((dbUserData) => {
				if (!dbUserData) {
					return res
						.status(404)
						.json({ message: "No user found with this id" });
				}
				res.json(dbUserData);
			})
			.catch((err) => {
				console.log(err);
				res.status(400).json(err);
			});
	},

	//todo createUser
	addUser({ body }, res) {
		User.create(body)
			.then((dbUserData) => res.json(dbUserData))
			.catch((err) => res.status(400).json(err));
	},
    
	//todo login
};

module.exports = userController;
