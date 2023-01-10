import React, { useState, useEffect } from "react";
import "./App.css";

import { Navbar } from "./global-components";
import { NoPage, Songpage, Home } from "./pages";

function App() {
	let Page;

	const [apiResponse, setapiResponse] = useState("");

	function callAPI() {
		fetch("http://localhost:9000/songpage")
			.then((res) => res.text())
			.then((res) => setapiResponse(res));
	}

	useEffect(() => {
		callAPI();
	});

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
			<p className="App-intro">{apiResponse}</p>
			<Page />
		</>
	);
}

export default App;
