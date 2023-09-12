const { User, Mood } = require("../models");

const resolvers = {
	Query: {
		users: async () => {
			return User.find();
		},
		user: async (parent, { email }) => {
			const params = email ? { email } : {};
			console.log(params);
			return User.findOne(params);
		},
		me: async () => {
			return "this returns the user";
		},
		mood: async () => {
			return "this returns a single mood";
		},
		// lastSevenDaysMoods:
		moodsByMood: async (parent, { userId, mood }) => {
			const params = userId ? { userId } : {};
			return User.findById(params);
		},
	},
};

module.exports = resolvers;
