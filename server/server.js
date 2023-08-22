const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const { typeDefs, resolvers } = require("./schema");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
	typeDefs,
	resolvers,
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const startApolloServer = async (typeDefs, resolvers) => {
	await server.start();
    
	server.applyMiddleware({ app });

	db.once("open", () => {
		app.listen(PORT, () => {
			console.log(`API server listening on localhost:${PORT}`);
			console.log(
				`Use GraphQL at http://127.0.0.1:${PORT}${server.graphqlPath}`
			);
		});
	});
};

startApolloServer(typeDefs, resolvers);
