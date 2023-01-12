import React from "react";
import ReactDOM from "react-dom/client";

import {
	createBrowserRouter,
	RouterProvider,
	createRoutesFromElements,
	Route,
	Link,
} from "react-router-dom";

import "./index.css";

import { Navbar } from "./global-components";
import { NoPage, Songpage, Home } from "./pages";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Home />}>
			<Route path="/songpage" element={<Songpage />} />
			<Route path="/song/:song_id/:diff" element={<Songpage />} />
		</Route>
	)
);

function App() {
	return (
		<>
			<Navbar />
			<RouterProvider router={router} />
		</>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
