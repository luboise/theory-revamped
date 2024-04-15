import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { callAPI } from "../../utils";

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
		const song = await callAPI(`/api/song/${song_id}/${diff}`);
		if (song.data) {
			setsongObject(song.data);
		} else console.error(`Could not fetch data for id: ${song_id}`);
	};

	useEffect(() => {
		if (!songObject) handleData();
	}, []);

	useEffect(() => { }, [songObject]);

	return (
		<div className="song-page">
			{songObject ? (
				<>
					<ChartTitle songObject={songObject} />
					<ChartMethodContainer
						apiReturn={songObject}
					></ChartMethodContainer>
					{/* <ChartExtras></ChartExtras> */}
				</>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
};

export default Songpage;
