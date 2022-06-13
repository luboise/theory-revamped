import React from "react";
import "./App.css";

import { Navbar, Chart } from "./components";
import { NoPage, Songpage, Home } from "./pages";

function App() {
	let Component;
	switch (window.location.pathname) {
		case "/":
			Component = Home;
			break;
		case "/songpage":
			Component = Songpage;
			break;
		default:
			Component = NoPage;
			break;
	}

	return (
		<>
			<Navbar />
			<div className="main-container">Component </div>
		</>
	);
}

export default App;

/*
const App = () => {
	return (
		<div className="gradient_bg">
			<div className="top_of_page">
				<Navbar />
				<Header />
				<h1>hello</h1>
			</div>
		</div>
	);
};
*/
