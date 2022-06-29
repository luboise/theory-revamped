import React from "react";
import "./songpage.css";

import { ChartHeader, ChartPreface, ChartMethod } from "./songpage-components";

let testChart = {
	title: "Fascination MAXX",
	URL: "https://youtu.be/Iw1-wYBAcc4?t=26",
};

const Songpage = () => {
	return (
		<div className="song-page">
			<ChartHeader attribs={testChart} />
			<ChartPreface />
			<ChartMethod />
		</div>
	);
};

export default Songpage;
