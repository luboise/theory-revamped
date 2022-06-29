import React from "react";
import "./App.css";

import { Navbar } from "./global-components";
import { NoPage, Songpage, Home } from "./pages";

function App() {
	let Page;
	switch (window.location.pathname) {
		case "/":
			Page = Home;
			break;
		case "/songpage":
			Page = Songpage;
			break;
		default:
			Page = NoPage;
			break;
	}

	return (
		<>
			<Navbar />
			<Page />
		</>
	);
}

export default App;
