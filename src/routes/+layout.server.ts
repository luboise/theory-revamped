import type { ChartDiff, ChartRow, SongFolder, SongRow } from "$lib/types";
import { error } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";
import { GAME_VERSION_TITLES } from "$lib/constants";

export const load: LayoutServerLoad = async ({ platform }) => {
	if (!platform) {
		console.error("Platform is undefined.");
		return {};
	}

	const charts = await platform.env.DB.prepare(
		"SELECT s.*, c.difficulty FROM song s JOIN chart c ON s.id = c.song_id;"
	).all<SongRow & Omit<ChartRow, "song_id">>();

	if (!charts.results) {
		error(500, "No charts available.");
	}

	// For chart in chart
	// Get the folder
	// If the folder doesn't exist yet
	// Create it
	// Add the chart to it

	const folders: { [key: number]: SongFolder } = [];

	for (const chart of charts.results) {
		if (!(chart.game_version in folders)) {
			folders[chart.game_version] = {
				title: GAME_VERSION_TITLES[chart.game_version],
				style: chart.game_version,
				songs: {}
			};
		}

		// If the song isn't in the list yet
		if (!(chart.id in folders[chart.game_version].songs)) {
			const {
				id: songId,
				title,
				title_ascii: titleAscii,
				genre,
				game_version: gameVersion,
				artist
			} = chart;

			folders[chart.game_version].songs[chart.id] = {
				songId,
				title,
				titleAscii,
				artist,
				genre,
				chartIds: [],
				gameVersion
			};
		}

		folders[chart.game_version].songs[chart.id].chartIds.push(chart.difficulty as ChartDiff);
	}

	Object.values(folders).forEach((folder) =>
		Object.values(folder.songs).forEach((song) => song.chartIds.sort())
	);

	return { folders };
};
