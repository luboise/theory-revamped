export interface SongData {
	songId: number;
	gameVersion: number;
	title: string;
	title_ascii: string;
	genre: string;
	artist: string;
	chartIds: ChartDiff[];
}

export type PlayMode = "SP" | "DP";

// 5 and 11 are unused
// 0-4  = SPB-SPL
// 6-10 = DPB-DPL
export type ChartDiff = 0 | 1 | 2 | 3 | 4 | 6 | 7 | 8 | 9 | 10;

export interface ChartData {
	chart_id: string;
	song_id: string;
	diff: ChartDiff;
	methods: Array<string>;
}

export interface SongFolder {
	style: number;
	title: string;
	songs: SongData[];
}
