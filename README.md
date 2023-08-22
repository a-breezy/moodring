# MoodRing
## Description

MoodRing is a single page web application to add mood logging capabilities to the [Oura Ring](https://ouraring.com/).

Users create an account, link it to their Oura Ring through [the Oura API](https://cloud.ouraring.com/docs/), and start logging their moods. Our users can add brief descriptions of what's caused their mood as well as the date if different from today. MoodRing will then make a call to the Oura API to gather the user's Sleep, Readiness, and Activity data and will graph it with the mood, allowing the user to visualize their mood in relation to other aspects of their lives.

## Technologies

### Frontend
[React:](https://www.npmjs.com/package/react) A JavaScript library for user interface.
[React Router DOM:](https://reactrouter.com/en/main/start/tutorial) Routing for single page applications, which uses the bowser's history API to allow users to traverse multiple pages of content within one React page.
[React Date Picker:](https://www.npmjs.com/package/react-datepicker) A simple and reusable calendar component that allows user to select the date from a calendar.

### Backend
[Express:](https://www.npmjs.com/package/express) Minimal backend framework for creating a Node server.
[Apollo Server:](https://www.npmjs.com/package/@apollo/server) GraphQL server for easy querying of NoSQL data.
[GraphQL:](https://www.npmjs.com/package/graphql) API query language for requesting specific information.
[MongoDB:](https://www.mongodb.com/) NoSQL database for data storage and management.
[Mongoose:](https://www.npmjs.com/package/mongoose) Object document modelling tool for MongoDB.
[Nodemon:](https://www.npmjs.com/package/nodemon) A tool to restart Node whenever a file changes in the directory of Nodemon.