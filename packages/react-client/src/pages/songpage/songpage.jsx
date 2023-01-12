import React from "react";
import { useParams } from "react-router-dom";
import { callAPI } from "../../utils.js";

import {
	ChartTitle,
	ChartExtras,
	ChartMethodContainer,
} from "./songpage-components";

import "./songpage.css";

let testChart = {
	title: "Sillus Lovus",
	url: "https://youtu.be/Iw1-wYBAcc4?t=26",
};

const Songpage = () => {
	let { song_id, diff } = useParams();

	let songObject = callAPI(`/api/song/${song_id}`);

	if (!songObject) songObject = testChart;

	return (
		<div className="song-page">
			<ChartTitle attribs={songObject} />
			<ChartMethodContainer songObject={songObject}></ChartMethodContainer>
			<ChartExtras></ChartExtras>
		</div>
	);
};

export default Songpage;
