const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");

const { typeDefs, resolvers } = require("./schema");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;

// define apollo server
const server = new ApolloServer({
	typeDefs,
	resolvers,
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// if error connecting to Mongo
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const startApolloServer = async (typeDefs, resolvers) => {
	await server.start();

	// apply express middleware to apollo server
	app.use(
		"/graphql",
		expressMiddleware(server, {
			//! may not be necessary... check back
			context: async ({ req }) => ({ token: req.headers.token }),
		})
	);

	db.once("open", () => {
		app.listen(PORT, () => {
			console.log(`API server listening on localhost:${PORT}`);
			console.log(`🚀 Use GraphQL at http://127.0.0.1:${PORT}/graphql`);
		});
	});
};

startApolloServer(typeDefs, resolvers);
