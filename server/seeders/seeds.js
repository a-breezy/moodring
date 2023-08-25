const { faker } = require("@faker-js/faker");

require("dotenv").config();
let testApi = process.env.testApi;

const db = require("../config/connection");
const { User, Mood } = require("../models");

// open connection to MongoDB
db.once("open", async () => {
	await User.deleteMany({});
	await Mood.deleteMany({});

	//* create user data
	const userData = [];
	for (let i = 0; i < 10; i++) {
		const firstName = faker.person.firstName();
		const lastName = faker.person.lastName();
		const email = faker.internet.email();
		const password = faker.internet.password();
		const ouraApi = testApi;

		userData.push({ firstName, lastName, email, password, ouraApi });
	}

	// insert users into mood-ring db
	const createdUsers = await User.collection.insertMany(userData);

	// get user id to ref User in the Mood collection
	let userIds = [];
	for (let i = 0; i < 10; i++) {
		let userId = createdUsers.insertedIds[i];
		userIds.push(userId);
	}

	//* create mood data:

	// moods that a user may have
	const moods = [
		"Ecstatic",
		"Happy",
		"Relaxed",
		"Indifferent",
		"Bored",
		"Sad",
		"Stressed",
		"Anxious",
		"Angry",
	];

     //! for testing multiple mood creation
	// const createdMoods = [];
	for (let i = 0; i < 50; i++) {
		// must go through createdUsers take each id and add to mood creation
		const randomUserIndex = Math.floor(Math.random() * createdUsers.length);
		const user = userIds.randomUserIndex;

		// select a random mood from the list
		const mood = moods[Math.floor(Math.random() * 9)];
		const description = faker.lorem.words(20);
		// create random score for oura data
		const randomScore = function () {
			let score = 0;
			while (score < 60) {
				score = Math.floor(Math.random() * 100);
			}
			return score;
		};
		const sleepScore = randomScore();
		const readinessScore = randomScore();
		const activityScore = randomScore();

        // insert Mood to db
		const createdMood = await Mood.create({
            user,
			mood,
			description,
			sleepScore,
			readinessScore,
			activityScore,
		});
        
        //! for testing multiple mood creation
		// createdMoods.push(createdMood);
	}
    //! for testing multiple mood creation
	// await Mood.collection.insertMany(createdMoods);

	console.log("Done seeding!");
	process.exit(0);
});
