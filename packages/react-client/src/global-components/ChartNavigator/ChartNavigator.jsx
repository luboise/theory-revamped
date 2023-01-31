import React from "react";
import { useEffect, useState, useMemo } from "react";

import { callAPI, GAME_VERSION_TITLES } from "../../utils";

import "./ChartNavigator.css";

async function fetchJSONResource(jsonFilename, array, index) {
	const jsonData = await callAPI(`/api/get_resource/${jsonFilename}`);
	if (jsonData.data) {
		// console.log(`Fetched ${jsonFilename}: `, jsonData.data);
		array[index] = JSON.parse(jsonData.data);
	} else console.error(`Unable to fetch ${jsonFilename}`);
}

function GameVersionFolder({ versionTitle, versionSongData }) {
	const [folderIsActive, setFolderIsActive] = useState(false);

	const songButtonArray = useMemo(() => {
		let songButtonArray = [];
		for (const song in versionSongData) {
			const currentSong = versionSongData[song];

			songButtonArray.push(
				<div className="song-dropdown-container">
					<a
						className="song-dropdown-anchor"
						href={`/song/${currentSong.song_id}/3`}
					>
						<button className="btn-song-dropdown">
							{currentSong.title}
						</button>
					</a>
				</div>
			);
		}

		return songButtonArray;
	}, [versionSongData]);

	useEffect(() => {
		console.log(`${versionTitle} set to ${folderIsActive}`);
	}, [folderIsActive]);

	return (
		<div className="game-version-container">
			<button
				className="btn-toggle-version"
				onClick={() => {
					setFolderIsActive(!folderIsActive);
				}}
			>
				{versionTitle}
			</button>
			{
				<div
					className={`version-song-container dropdown-${
						!folderIsActive ? "in" : ""
					}active`}
				>
					{songButtonArray}
				</div>
			}
		</div>
	);
}

// function SongRouter({ songObjects, chartObjects }) {
// 	return gameVersionDropdowns;
// }

// function groupSongsByVersion(songObjects) {}

function getGameVersionDropdowns(GAME_VERSION_GROUPS) {
	if (!GAME_VERSION_GROUPS) return [];

	let gameVersionDropdowns = [];
	for (const key in GAME_VERSION_GROUPS) {
		gameVersionDropdowns.push(
			<GameVersionFolder
				versionTitle={
					key in GAME_VERSION_TITLES
						? GAME_VERSION_TITLES[key]
						: `${key}: IIDX ${key}`
				}
				versionSongData={GAME_VERSION_GROUPS[key]}
			/>
		);
	}

	return gameVersionDropdowns;
}

export default function ChartNavigator() {
	const [songAndChartObjects, setSongAndChartObjects] = useState([null, null]);

	const songObjects = songAndChartObjects[0];
	const chartObjects = songAndChartObjects[1];

	const GAME_VERSION_GROUPS = useMemo(() => {
		if (!songObjects) return {};

		const groupedObject = Object.values(songObjects).reduce(
			(groups, item) => {
				const group = groups[item.game_version] || [];
				group.push(item);
				groups[item.game_version] = group;
				return groups;
			},
			{}
		);

		return groupedObject;
	}, [songAndChartObjects]);

	const gameVersionDropdowns = getGameVersionDropdowns(GAME_VERSION_GROUPS);

	const handleData = async () => {
		const arrayCopy = songAndChartObjects.slice();

		await fetchJSONResource("song_objects.json", arrayCopy, 0);
		await fetchJSONResource("chart_objects.json", arrayCopy, 1);

		setSongAndChartObjects(arrayCopy);

		// console.log(songAndChartObjects);
	};

	useEffect(() => {
		handleData();
	}, []);

	useEffect(() => {}, [songAndChartObjects]);

	return (
		<div className="chart-navigator">
			<div className="chart-navigator-header">
				<h2>Chart navigator</h2>
				<form>
					<input
						type="text"
						id="input-chart-search"
						name="chart-search"
						autoComplete="off"
						placeholder="Search"
						onChange={() => {
							alert("Search not implemented yet!");
						}}
					/>
				</form>
			</div>

			<div className="game-version-dropdowns">{gameVersionDropdowns}</div>
		</div>
	);
}
