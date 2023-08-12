import React, { useState } from "react";

const Signup = () => {
	const [formState, setFormState] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		ouraAPI: "",
		termsAccept: false,
	});

	// set up mutation to addUser
    // const [addUser, {error}] = useMutation(ADD_USER)

	const handleChange = (e) => {
		const { name, value } = e.target;

		if (name === "termsAccept") {
			setFormState({
				...formState,
				termsAccept: !formState.termsAccept,
			});
		} else {
			setFormState({
				...formState,
				[name]: value,
			});
		}
	};

    // for testing
    let error = false;

	// handle form submit
	const handleFormSubmit = async (e) => {
		e.preventDefault();

		// try/catch for addUser
	};

	return (
		<section id="create-acc-sect">
			<h2>Create an Account</h2>
			<form id="create-acc-form" onSubmit={handleFormSubmit}>
				<fieldset className="create-acc-field">
					<label htmlFor="first-name" className="create-acc-label">
						First Name
						<input
							id="first-name"
							className="create-acc-input"
							placeholder="Please enter your first name"
							type="text"
							name="firstName"
							value={formState.firstName}
							onChange={handleChange}
							required
						/>
					</label>
					<label htmlFor="last-name" className="create-acc-label">
						Last Name
						<input
							id="last-name"
							className="create-acc-input"
							placeholder="Please enter your last name"
							type="text"
							name="lastName"
							value={formState.lastName}
							onChange={handleChange}
							required
						/>
					</label>
					<label htmlFor="email" className="create-acc-label">
						Email
						<input
							id="email"
							className="create-acc-input"
							placeholder="Please enter email"
							type="email"
							name="email"
							value={formState.email}
							onChange={handleChange}
							required
						/>
					</label>
					<label htmlFor="password" className="create-acc-label" minLength={8}>
						Password
						<input
							id="password"
							className="create-acc-input"
							placeholder="Type in a unique password"
							type="password"
							name="password"
							value={formState.password}
							onChange={handleChange}
							required
						/>
					</label>
					<label className="create-acc-label">
						Oura API
						<input
							type="text"
							className="create-acc-input"
							placeholder="enter Oura API KEY"
							name="ouraAPI"
							value={formState.ouraAPI}
							onChange={handleChange}
							required
						/>
					</label>
					<label className="create-acc-label checkbox">
						<input
							type="checkbox"
							name="termsAccept"
							value={formState.termsAccept}
							onChange={handleChange}
							required
						/>
						{/* need to research terms and conditions and insert anchor */}
						<span>I accept the terms and conditions</span>
					</label>
				</fieldset>
				<div className="container">
					<div>{error && <h3 className='error'>Whoops looks like something went wrong</h3>}</div>
					<input className="primary-btn" type="submit" value="Submit"></input>
				</div>
			</form>
		</section>
	);
};

export default Signup;
