import React, { useState } from "react";
import { useEffect } from "react";
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
	const [songObject, setsongObject] = useState();

	const { song_id } = useParams();
	const { diff } = useParams();

	const handleData = async () => {
		const song = await callAPI(`/api/song/${song_id}`);
		if (song.data) {
			console.log("New song obtained: ", song.data);
			setsongObject(song.data);
		} else console.error(`Could not fetch data for id: ${song_id}`);
	};

	useEffect(() => {
		if (!songObject) handleData();
	}, []);

	useEffect(() => {}, [songObject]);

	// console.log(songObject);

	return (
		<div className="song-page">
			{songObject ? (
				<>
					<ChartTitle songObject={songObject} />
					<ChartMethodContainer
						songObject={songObject}
					></ChartMethodContainer>
					<ChartExtras></ChartExtras>
				</>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
};

export default Songpage;
