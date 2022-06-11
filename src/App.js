import React from "react";
import "./App.css";
import { Navbar } from "./components";
import { Features, Footer, Header } from "./containers";

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

export default App;
