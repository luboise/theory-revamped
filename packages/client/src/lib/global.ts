const SONG_DATA: {[key: string]: SongData} = {};

const FOLDER_DATA: Array<SongFolder> = (() => {
	const songs: Array<SongFolder> = [];

	if (!SONG_DATA ) return songs;

	// For chart in chart
	// Get the folder
	// If the folder doesn't exist yet
	// Create it
	// Add the chart to it



	const groups: { [key: string]: Array<ChartData> } = {};

	for (const songId in SONG_DATA) {
		const item = songObjects[songId];

		// Check that game version exists
		groups[item.game_version] = groups[item.game_version] || [];

		console.debug('Pushing ', item);
		groups[item.game_version].push(item);
	}

	// console.debug(groups);
	return groups;
})();

const GAME_VERSION_GROUPS = useMemo(;
