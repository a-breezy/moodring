import React from "react";
import MoodStats from "../components/MoodStats";
import LogMood from "../components/LogMood";

const Dashboard = () => {
	return (
		<>
        {/* if logged in user should see stats and be able to log mood */}
			<MoodStats />
			<LogMood />
        {/* otherwise user should see a welcome screen and a call to action */}
		</>
	);
};

export default Dashboard;
