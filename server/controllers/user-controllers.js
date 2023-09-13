const { User } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const jwtSecret = process.env.jwtSecret;

const userController = {
	// get all users
	//! testing only
	getAllUsers(req, res) {
		User.find({})
			.then((dbUserData) => res.json(dbUserData))
			.catch((err) => {
				console.log(err);
				res.status(400).json(err);
			});
	},

	getUserById({ params }, res) {
		User.findOne({ _id: params.id })
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

	addUser({ body }, res) {
		User.create(body)
			.then((dbUserData) => res.json(dbUserData))
			.catch((err) => res.status(400).json(err));
	},

	//todo login
	async login(req, res) {
		const { email, password } = req.body;
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(401).json({ message: "Invalid email or password" });
		}
		const passwordMatch = await bcrypt.compare(password, user.password);
		if (!passwordMatch) {
			return res.status(401).json({ message: "Invalid email or password" });
		}

		const token = jwt.sign({ userId: user._id }, jwtSecret, {
			expiresIn: "1h",
		});

		res.json({ token });
	},
};

module.exports = userController;
