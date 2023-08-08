import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from './pages/Login'

function App() {
	return (
		<div className="App">
			<Header />
			{/* This area will render with react router to provide routes to various pages */}
			<div>
				{/* <Home /> */}
				<Login />
			</div>
			<Footer />
		</div>
	);
}

export default App;
