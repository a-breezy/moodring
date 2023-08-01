import React, { useState } from "react";

const DropDown = (props) => {
	const { dropdownItems, itemState, setItemState } = props;
	const [dropDownOpen, setDropDownOpen] = useState(false);
	
	const handleOpen = (e) => {
		e.preventDefault();
		setDropDownOpen(!dropDownOpen);
	};

	console.log("itemstate", itemState);

	return (
		<div className="dropdown">
			<button onClick={handleOpen}>Select Mood</button>
			{dropDownOpen ? (
				<ul className="dropdown-menu">
					{dropdownItems.map((item) => {
						return (
							<li
								className="dropdown-menu-item"
								key={item}
								onClick={() => {
									// currently this changes the state within dropdown but doesn't send state back up to logmood
									setItemState(item);
									setDropDownOpen(!dropDownOpen);
								}}
							>
								{item}
							</li>
						);
					})}
				</ul>
			) : null}
		</div>
	);
};
export default DropDown;
