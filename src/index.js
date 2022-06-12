import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "./components";
import { Features, Footer, Header } from "./containers";
import { Layout, Nopage, Songpage, Home} from "./pages"

import "./index.css";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="songpage" element={<Songpage />} />
					<Route path="*" element={<NoPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
// root.render(<React.StrictMode></React.StrictMode>);
