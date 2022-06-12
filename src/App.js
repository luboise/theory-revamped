import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "./components";
import { Features, Footer, Header } from "./containers";
import { Layout, NoPage, Songpage, Home } from "./pages";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navbar />}>
					<Route index element={<Home />} />
					<Route path="songpage" element={<Songpage />} />
					<Route path="*" element={<NoPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

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
