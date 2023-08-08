import React from "react";
import CreateAccount from "../components/CreateAccount";
import goldOura from "../assets/images/goldOura.jpg";

const Home = () => {
	return (
		<div id="home">
			<section id="home-desc">
				<h2>Welcome To MoodRing</h2>
				<div className="home-desc">
					<div className="img-block">
						{/* this image of the ring should align with the text */}
						<img src={goldOura} alt="oura ring" />
						<p className="home-p">
							A place where you can connect you Oura ring and log your mood to
							see changes in your mood. While the tags feature of Oura is great,
							I found that I wanted to log some things that weren't available -
							namely mood.
						</p>
					</div>
					<p className="home-p">So I set out to change that.</p>
					<p className="home-p">
						When you create an account your unique Oura API key will give this
						MoodRing the ability to take data from your Oura ring and log it.
						From there you can log a mood, which will connect to your Oura data
						and get graphed so you can see how your sleep, readiness, and
						activity correlate with your mood!
					</p>
					<p className="home-p">
						After reading this you probably want to{" "}
						<a href="https://ouraring.com/" alt="Learn more about Oura">
							learn more
						</a>{" "}
						about Oura Ring, if you don't already know about it. Click{" "}
						<span>
							<a href="https://ouraring.com/" alt="Learn more about Oura">
								here
							</a>
						</span>{" "}
						to learn more.
					</p>
				</div>
			</section>
			<CreateAccount />
			{/* <Login /> */}
		</div>
	);
};

export default Home;
