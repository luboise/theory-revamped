import { GAME_VERSION_TITLES } from "./constants";
import songs from "./songs";

const SONG_FOLDERS = (() => {
	if (!songs) return songs;

	// For chart in chart
	// Get the folder
	// If the folder doesn't exist yet
	// Create it
	// Add the chart to it

	const folders: { [key: number]: SongFolder } = [];

	for (const songId in songs) {
		const item = songs[songId];

		if (!(item.gameVersion in folders)) {
			folders[item.gameVersion] = {
				title: GAME_VERSION_TITLES[item.gameVersion],
				style: item.gameVersion,
				songs: []
			};
		}
		folders[item.gameVersion].songs.push(item);
	}

	// console.debug(groups);
	return folders;
})();

export default SONG_FOLDERS;
