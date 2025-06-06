import type { SongData } from "$lib/database/types";

export const SAMPLE_SONG: SongData = {
	songId: 27077,
	gameVersion: 27,
	title: "Theory",
	titleAscii: "Theory",
	genre: "TRAP",
	artist: "YUTO",
	chartIds: [3]
} as const;
