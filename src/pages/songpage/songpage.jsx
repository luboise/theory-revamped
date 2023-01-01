import React from "react";
import "./songpage.css";

import { ChartTitle, ChartPreface, ChartMethod, ChartExtras, ChartMethodContainer} from "./songpage-components";

let testChart = {
	title: "Fascination MAXX",
	url: "https://youtu.be/Iw1-wYBAcc4?t=26",
};

const Songpage = () => {
	return (
	<div className="song-page">
		<ChartTitle attribs={testChart} />
		<ChartMethodContainer attribs={testChart}></ChartMethodContainer>
		<ChartExtras></ChartExtras>
	</div>
	);
};

export default Songpage;
