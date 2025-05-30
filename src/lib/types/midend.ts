// 5 and 11 are unused
// 0-4  = SPB-SPL
// 6-10 = DPB-DPL
export type ChartDiff = 0 | 1 | 2 | 3 | 4 | 6 | 7 | 8 | 9 | 10;

export function isChartDiff(data: any): data is ChartDiff {
	return typeof data === "number" && [0, 1, 2, 3, 4, 6, 7, 8, 9, 10].includes(data);
}

export type PlayMode = "SP" | "DP";

export interface SongData {
	songId: number;
	gameVersion: number;
	title: string;
	titleAscii: string;
	genre: string;
	artist: string;
	chartIds: ChartDiff[];
}

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
