const gql = require("graphql-tag");

const typeDefs = gql`
	type Query {
		helloWorld: String
	}
`;

module.exports = typeDefs;
