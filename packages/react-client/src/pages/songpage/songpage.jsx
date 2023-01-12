import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { callAPI as callAPI } from "../../utils.js";

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
	const [apiResponse, setapiResponse] = useState({});

	let { song_id } = useParams();
	let { diff } = useParams();

	console.log(song_id, diff);

	let songObject = callAPI(`/api/song/${song_id}`);

	console.log(songObject);

	if (!songObject) songObject = testChart;

	// console.log(songObject);

	return (
		<div className="song-page">
			<ChartTitle attribs={songObject} />
			<ChartMethodContainer songObject={songObject}></ChartMethodContainer>
			<ChartExtras></ChartExtras>
		</div>
	);
};

export default Songpage;
