const express = require("express");

// mongoose connection
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require("./routes"));

// if error connecting to Mongo
db.on("error", console.error.bind(console, "MongoDB connection error:"));

db.once("open", () => {
	app.listen(PORT, () => {
		console.log(`API server listening on localhost:${PORT}`);
	});
});
