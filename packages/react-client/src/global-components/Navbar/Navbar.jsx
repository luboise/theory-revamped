import { useEffect, useState } from "react";
import { callAPI } from "../../utils";

import "./Navbar.css";

async function fetchJSONResource(jsonFilename, array, index) {
	const jsonData = await callAPI(`/api/get_resource/${jsonFilename}`);
	if (jsonData.data) {
		// console.log(`Fetched ${jsonFilename}: `, jsonData.data);
		array[index] = JSON.parse(jsonData.data);
	} else console.error(`Unable to fetch ${jsonFilename}`);
}

function GameVersionFolder({ gameVersionObject }) {
	let songButtonArray = [];
	for (const song in gameVersionObject) {
		const currentSong = gameVersionObject[song];

		songButtonArray.push(
			<>
				<a href={`/song/${currentSong.song_id}/3`}>
					<button className="song-dropdown">{currentSong.title}</button>
				</a>
			</>
		);
	}

	return <div className="game-version-dropdown">{songButtonArray}</div>;
}

function SongRouter({ songObjects, chartObjects }) {
	if (!songObjects) {
		return <></>;
	}
	let dropButtons = [];

	const GAME_VERSION_GROUPS = Object.values(songObjects).reduce(
		(groups, item) => {
			const group = groups[item.game_version] || [];
			group.push(item);
			groups[item.game_version] = group;
			return groups;
		},
		{}
	);

	let gameVersionDropdowns = [];

	for (const key in GAME_VERSION_GROUPS) {
		gameVersionDropdowns.push(
			<GameVersionFolder gameVersionObject={GAME_VERSION_GROUPS[key]} />
		);
	}

	return <div className="song-page-router">{gameVersionDropdowns}</div>;
}

function Navbar() {
	const [songAndChartObjects, setSongAndChartObjects] = useState([null, null]);

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
		<div className="navbar__container">
			<ul className="navbar__link-wrapper">
				<CustomLink href="/">Home</CustomLink>
				<CustomLink href="songpage">Song Page</CustomLink>
				<SongRouter
					songObjects={songAndChartObjects[0]}
					chartObjects={songAndChartObjects[1]}
				/>
			</ul>
		</div>
	);
}

function CustomLink({ href, children, ...props }) {
	const path = window.location.pathname;

	return (
		<li className={"navlink" + (path === href ? " active" : "")}>
			<a href={href} {...props}>
				{children}
			</a>
		</li>
	);
}

export default Navbar;
