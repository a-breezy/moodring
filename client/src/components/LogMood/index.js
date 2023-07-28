import React, { useState } from "react";

// this component taks the user's data from oura and adds a mood and description to it
function LogMood() {
	const [dropDownOpen, setDropDownOpen] = useState(false);

	let moods = [
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

	const handleOpen = () => {
		setDropDownOpen(!dropDownOpen);
	};

	return (
		<section id="log-mood-section">
			<h2>Log a New Mood</h2>
			<p className="log-mood-desc">Here is where you describe your mood</p>
			<form className="log-mood-container">
				<div className="date-item log-container">
					<h3>Select a date, if not today</h3>
					<p>This is the calendar container</p>
				</div>
				<div className="mood-select-item log-container">
					<h3>Select a Mood from the Drop-Down</h3>
					<div>
						<p>This is the mood selection container</p>
						<button onClick={handleOpen}>Select Mood</button>
						{dropDownOpen ? (
							<ul className="mood-dropdown">
								{moods.map((mood) => {
									return (
										<li className="mood-dropdown-item" key={mood}>
											<button>{mood}</button>
										</li>
									);
								})}
							</ul>
						) : null}
					</div>
				</div>
				<div className="notes-item log-container">
					<div>
						<h3>Notes:</h3>
						<p>
							Here's where you can add notes related to the mood that you're
							feeling. It will be logged and can be referenced in the future.
						</p>
					</div>
					<textarea rows="4" placeholder="Type your mood here"></textarea>
				</div>
			</form>
		</section>
	);
}

export default LogMood;
