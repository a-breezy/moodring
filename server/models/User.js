const { Schema, model } = require("mongoose");

const userSchema = new Schema({
	firstName: {
		type: String,
		required: true,
		trim: true,
	},
	lastName: {
		type: String,
		required: true,
		trim: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		match: [/.+@.+\..+/, "Must match an email address!"],
	},
	password: {
		type: String,
		required: true,
		minlength: 7,
	},
	ouraAPI: {
		//! APIKey, perhaps add match for value
		//! add bcrypt
		type: String,
		required: true,
	},
});

const User = model("User", userSchema);

module.exports = User;
