import React, { useState } from "react";

const Login = () => {
	const [formState, setFormState] = useState({ email: "", password: "" });
	// once db is created and graphql mutations set up:
	// const [login, {error}] = useMutation(LOGIN_USER)

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormState({
			...formState,
			[name]: value,
		});
	};

	const handleFormSubmit = async (event) => {
		event.preventDefault();

		try {
			console.log(formState);
			// use login mutation to login user
			// const { data } = await Login({
			// 	variables: { ...formState },
			// });
			// Auth.login(data.login.token)
		} catch (e) {
			console.error(e);
		}

		// clear form on submit
		setFormState({
			email: "",
			password: "",
		});
	};

	// for testing
	let error = false;

	return (
		<section id="login">
			<div>
				<h2>Login</h2>
				<form id="login-form" onSubmit={handleFormSubmit}>
					<label htmlFor="email" className="form-label">
						Email:
						<input
							id="email"
							name="email"
							type="email"
							placeholder="Your email address"
							className="form-input"
							value={formState.email}
							onChange={handleChange}
							required
						/>
					</label>
					<label htmlFor="password" className="form-label">
						Password:
						<input
							id="password"
							name="password"
							type="password"
							placeholder="********"
							className="form-input"
							value={formState.password}
							onChange={handleChange}
							required
						/>
					</label>
					<button type="submit" className="primary-btn">
						Submit
					</button>
				</form>
				{error && <div>Login Failed</div>}
			</div>
		</section>
	);
};

export default Login;
