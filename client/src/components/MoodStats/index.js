import React, { useState } from "react";

function MoodStats() {
	let [stats, setStats] = useState(false);
	let sampleData = {
		readiness: "85",
		sleep: "95",
		activity: "78",
		mood: "good",
	};

	return (
		<section id="mood-section">
			<h2 className="mood-stats">Your Stats</h2>
			<p>
				Here's where you can look at your stats to gleem some information on how
				you're doing. Anything over 85 is great! If you're below 85, not to
				worry, that just means that you've got to focus a bit more on that
				aspect of your day to day.
			</p>
			<div className="mood-container">
				<div>
					<div className="stats-container">
						<div className="readiness container">
							<h3>READINESS: {sampleData.readiness}</h3>
						</div>
						<div className="sleep container">
							<h3>SLEEP: {sampleData.sleep}</h3>
						</div>
						<div className="activity container">
							<h3>ACTIVITY: {sampleData.activity}</h3>
						</div>
						<div className="mood container">
							<h3>MOOD: {sampleData.mood}</h3>
						</div>
					</div>
				</div>
				<div className="graph-container">
					<div
						className="graph"
						onMouseOver={() => setStats(true)}
						onMouseOut={() => setStats(false)}
					>
						GRAPH GOES HERE
					</div>
					{stats && (
						<div className="stats">STATS THAT APPEAR ON MOUSE OVER</div>
					)}
				</div>
			</div>
		</section>
	);
}

export default MoodStats;
