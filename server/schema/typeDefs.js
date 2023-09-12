const gql = require("graphql-tag");

const typeDefs = gql`
	type User {
		_id: ID
		firstName: String
		lastName: String
		email: String
		ouraAPI: String
		moods: [Mood]
	}

	type Mood {
		_id: ID
		userId: ID
		sleepScore: Int
		readinessScore: Int
		activityScore: Int
		mood: String
		description: String
	}

	# when querying a user we need their last 7 mood entries
	type Query {
		me: User
		user(email: String!): User
		users: [User]
		mood(email: String!): Mood
		moods
		lastSevenDaysMoods: [Mood]
		moodsByMood: [Mood]
	}
`;

module.exports = typeDefs;
