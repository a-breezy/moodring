import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MoodStats from "./components/MoodStats";

function App() {
	return (
		<div className="App">
			<Header></Header>
			{/* This area will render with react router to provide routes to various pages */}
			<div>
				<MoodStats />
			</div>
			<Footer></Footer>
		</div>
	);
}

export default App;
