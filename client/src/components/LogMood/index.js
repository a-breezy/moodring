import React, { useState } from "react";
import DropDown from "../DropDown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

function LogMood() {
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
	const [formState, setFormState] = useState({ date: "", mood: "", note: "" });
	const { date, mood, note } = formState;
	const [moodDate, setMoodDate] = useState(new Date());
	const [moodState, setMoodState] = useState("");

	// include backend logic to add date, mood, and notes to backend
	console.log(formState);

	function handleChange(changeType, data) {
		if (changeType === "date") {
			setFormState({ ...formState, date: data });
		} else if (changeType === "mood") {
		} else if (changeType === "note") {
			setFormState({ ...formState, note: data });
		}
	}

	return (
		<section id="log-mood-section">
			<h2>Log a New Mood</h2>
			<p className="log-mood-desc">Here is where you describe your mood</p>
			<form className="log-mood-container">
				<div className="date-item log-container">
					<h3>Select a date, if not today</h3>
					<p>This is the calendar container</p>
					<DatePicker
						name="date"
						selected={moodDate}
						defaultValue={date}
						onChange={(date) => handleChange("date", date)}
					/>
				</div>
				<div className="mood-select-item log-container">
					<h3>Select a Mood from the Drop-Down</h3>
					<div>
						<p>This is the mood selection container</p>
						<DropDown
							name="mood"
							defaultValue={mood}
							dropdownItems={moods}
							itemState={moodState}
							setItemState={setMoodState}
							onChange={(itemState) => {
								console.log(itemState);
								handleChange("mood", itemState);
							}}
						/>
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
					<textarea
						rows="4"
						name="message"
						placeholder="Type your mood here"
						defaultValue={note}
						onChange={(e) => {
							handleChange("note", e.target.value);
						}}
					></textarea>
				</div>
			</form>
		</section>
	);
}

export default LogMood;
