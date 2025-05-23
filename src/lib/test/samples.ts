import type { SongData } from "$lib/database/types";

export const SAMPLE_SONG: SongData = {
	songId: Number("01001"),
	gameVersion: 0,
	title: "GRADIUSIC CYBER",
	titleAscii: "GRADIUSIC CYBER",
	genre: "DIGI-ROCK",
	artist: "TAKA",
	chartIds: [3, 2]
} as const;
