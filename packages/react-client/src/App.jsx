import React from "react";

import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";

import "./App.css";

import { Navbar } from "./global-components";
import { NoPage, Songpage, Home } from "./pages";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/">
			<Route index element={<Home />} />
			<Route path="songpage" element={<Songpage />} />
			<Route path="song/:song_id/:diff" element={<Songpage />} />
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

export default App;
