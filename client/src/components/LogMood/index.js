import React from "react";

// this component taks the user's data from oura and adds a mood and description to it
function LogMood() {
	return (
		<div className="log-mood-container">
			<div className="mood-select">
				<h3>Log a New Mood</h3>
				{/* insert a drop down menu here */}
			</div>
            <div className="notes">
                <h3>Notes:</h3>
                <textarea rows="4"></textarea>
            </div>
		</div>
	);
}

export default LogMood;
