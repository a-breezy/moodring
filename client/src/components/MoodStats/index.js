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
			<div className="stats-desc-container">
				<div className="stats-desc-item" style={{ flexBasis: "100vw" }}>
					<h2>Your Stats</h2>
					<p>
						Here's where you can look at your stats to gleem some information on
						how you're doing. Anything over 85 is great! If you're below 85, not
						to worry, that just means that you've got to focus a bit more on
						that aspect of your day to day.
					</p>
				</div>
				<div className="stats-desc-item">
					<h2>Readiness</h2>
					<p>
						Readiness describes how you've recovered based on your activity
						levels and sleep from the day before. Things that effect Readiness
						are sleep, sleep balance, previous day activity, activity balance,
						resting heart rate, HRV balance, body temperature, and recovery
						index. If you want to learn more about your Readiness score check
						out{" "}
						<a href="https://ouraring.com/blog/readiness-score/">
							The Pulse Blog
						</a>
					</p>
				</div>
				<div className="stats-desc-item">
					<h2>Sleep</h2>
					<p>
						Your Sleep Score tells you how well you slept last night. We all
						know that sleep is one of the most important contributors to a
						healthy life, but sometimes it's hard to know what exactly is
						contributing to healthy sleep. Oura's Sleep Score is made up of
						seven contributors: total sleep, efficiency, restfulness, REM sleep,
						Deep sleep, Latency, and Timing. If you want to learn more about
						your Sleep score check out{" "}
						<a href="https://ouraring.com/blog/sleep-score/">The Pulse Blog</a>
					</p>
				</div>
				<div className="stats-desc-item">
					<h2>Activity</h2>
					<p>
						A huge proponent of your Sleep and Readiness scores is the Activity
						Score. This score is automatically logged by your Oura Ring and will
						give you the opportunity to tag based on the activity that it thinks
						you did. It's based on six contributors: stay active, move every
						hour, meet daily goals, training frequency, training volume, and
						recovery time. Check out{" "}
						<a href="https://ouraring.com/blog/activity-score/">
							The Pulse Blog
						</a>{" "}
						to learn more about your activity score and what they tell you about
						your health.
					</p>
				</div>
			</div>
			<div className="mood-container">
				<div className="stats-container">
					<div className="readiness stat-item">
						<h3>READINESS</h3>
						<p>{sampleData.readiness}</p>
					</div>
					<div className="sleep stat-item">
						<h3>SLEEP</h3>
						<p>{sampleData.sleep}</p>
					</div>
					<div className="activity stat-item">
						<h3>ACTIVITY</h3>
						<p>{sampleData.activity}</p>
					</div>
					<div className="mood stat-item">
						<h3>MOOD</h3>
						<p>{sampleData.mood}</p>
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
